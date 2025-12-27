import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Dash, Plus, Trash } from 'react-bootstrap-icons';
import { useCartState } from '../../store';
import './style.css'

function CartItem({ item }) {
  const { updateQuantity, removeFromCart, toggleItemSelection } = useCartState();

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleSelectionChange = (e) => {
    toggleItemSelection(item.id, e.target.checked);
  };

  const discountPercentage = item.discount || 0;
  const price = parseFloat(item.price) || 0;
  const originalPrice = discountPercentage > 0 ? price / (1 - discountPercentage / 100) : price;
  const finalPrice = price;
  const quantity = item.quantity || item.cartQuantity || 1;
  
  // إخفاء معلومات الخصم إذا لم يكن هناك خصم
  const hasDiscount = discountPercentage > 0; 

  return (
 
    <Card className="mb-3 bg-card shadow-sm">
      <Card.Body className="p-3 d-flex align-items-center">
    
        <div className="me-3 mt-1"> 
          <Form.Check
            className="red-checkbox"
            type="checkbox"
            checked={item.isSelected || false}
            id={`cart-item-check-${item.id}`}
            onChange={handleSelectionChange}
          />
        </div>

        <div className="cart me-3" >
          <img 
            src={item.image || item.img || item.photo || '/default-product.jpg'} 
            alt={item.name || item.title || 'Product'}
            className="img-fluid img-cart rounded-3"
            onError={(e) => {
              e.target.src = '/default-product.jpg';
            }}
          />
        </div>
        
        {/* 3. تفاصيل المنتج - مرنة */}
        <div className="flex-grow-1 d-flex flex-column justify-content-between align-items-start">
          
          {/* اسم المنتج */}
          <div className="fw-bold mb-1" style={{ fontSize: '1.05rem' }}>
            {item.name || item.title || 'Product'}
          </div>

          {/* الخصم والسعر الأصلي في نفس السطر - يظهر فقط إذا كان هناك خصم */}
          {hasDiscount && (
            <div className="d-flex align-items-center mb-1">
              {/* نسبة الخصم - لون برتقالي فاتح */}
              <span className="fw-bold me-2" style={{ color: '#ff8c00', fontSize: '0.85rem' }}>
                {discountPercentage}%
              </span>
              {/* السعر الأصلي - خط مشطوب ورمادي فاتح */}
              <span className="text-decoration-line-through text-muted" >
                ${originalPrice.toFixed(2)}
              </span>
            </div>
          )}

          {/* السعر النهائي - خط عريض وأحمر */}
          <div className="fw-bold" style={{ color: '#dc3545', fontSize: '1.1rem' }}>
            ${finalPrice.toFixed(2)}
          </div>
        </div>
        
        {/* 4. عناصر التحكم (الكمية والحذف) - أقصى اليمين */}
        <div className="d-flex flex-column align-items-end justify-content-between ms-auto h-100">
          
          {/* زر الحذف - في الأعلى */}
          <Button 
            variant="link" 
            className="text-danger p-0 mb-3" 
            onClick={handleRemove}
          >
            <Trash size={18} />
          </Button>
          
          {/* أزرار الكمية - في الأسفل */}
          <div className="d-flex align-items-center border rounded-3" style={{ height: '32px' }}>
            
            {/* زر الطرح */}
            <Button 
              variant="light" 
              size="sm"
              className="p-1 border-0"
              style={{ lineHeight: '1', width: '32px', color: '#6c757d' }}
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
            >
              <Dash size={16} />
            </Button>
            
            {/* الكمية */}
            <span className="px-2 fw-bold" style={{ fontSize: '0.95rem' }}>
              {quantity}
            </span>
            
            {/* زر الإضافة */}
            <Button 
              variant="light" 
              size="sm"
              className="p-1 border-0"
              style={{ lineHeight: '1', width: '32px', color: '#6c757d' }}
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              <Plus size={16} />
            </Button>
            
          </div>
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default CartItem;