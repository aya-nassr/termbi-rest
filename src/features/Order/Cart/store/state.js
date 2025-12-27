import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import CartService from '../services/api';

export const useCartState = create(
  persist(
    (set, get) => ({
      items: [],
      isLoading: false,

      fetchCart: async () => {
        set({ isLoading: true });
        try {
          const data = await CartService.getAllProductsInCart();
          // تحويل بنية البيانات من السيرفر لتتوافق مع التطبيق
          const formattedItems = data.map(cartItem => ({
            ...cartItem.product,
            cartId: cartItem.id,
            quantity: cartItem.quantity,
            cartQuantity: cartItem.quantity,
            isSelected: true
          }));
          set({ items: formattedItems, isLoading: false });
        } catch (error) {
          console.error("Failed to fetch cart", error);
          set({ isLoading: false });
        }
      },
      
     addToCart: async (product) => {
        try {
          console.log('Product being added to cart:', product);
          
          const payload = {
            product_id: product.id,
            quantity: 1
          };
          
          console.log('Payload being sent:', payload);
          
          // إرسال للسيرفر أولاً
          const response = await CartService.addProductToCart(payload);
          
          console.log('Server response:', response);
          
          // بعد نجاح السيرفر، نحدث الحالة المحلية
          const { items } = get();
          const existingItem = items.find(item => item.id === product.id);
          
          if (existingItem) {
            set({
              items: items.map(item =>
                item.id === product.id
                  ? { ...item, quantity: (item.quantity || 1) + 1 }
                  : item
              )
            });
          } else {
            set({
              items: [...items, { ...product, quantity: 1, isSelected: true }]
            });
          }
        } catch (error) {
          console.error('Add to cart failed:', error);
          console.error('Error details:', error.response?.data);
          throw error;
        }
      },
      
      removeFromCart: async (cartId) => {
        try {
          // استخدام cartId الصحيح للحذف من السيرفر
          const item = get().items.find(item => item.id === cartId);
          const actualCartId = item?.cartId || cartId;
          
          await CartService.deleteCartItem(actualCartId);
          set({
            items: get().items.filter(item => item.id !== cartId)
          });
        } catch (error) {
          console.error("Delete failed", error);
        }
      },
      
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        
        set({
          items: get().items.map(item =>
            item.id === productId
              ? { ...item, quantity: quantity, cartQuantity: quantity }
              : item
          )
        });
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          if (!item.isSelected) return total;
          const price = parseFloat(item.price) || 0;
          const quantity = item.quantity || item.cartQuantity || 1;
          return total + (price * quantity);
        }, 0);
      },
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => {
          if (!item.isSelected) return total;
          const quantity = item.quantity || item.cartQuantity || 1;
          return total + quantity;
        }, 0);
      },
      
      toggleItemSelection: (productId, isSelected) => {
        set({
          items: get().items.map(item =>
            item.id === productId
              ? { ...item, isSelected }
              : item
          )
        });
      }
    }),
    {
      name: 'cart-storage'
    }
  )
);