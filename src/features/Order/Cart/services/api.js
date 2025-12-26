import { httpClient } from '/src/lib/axios';

class CartService {
    #endPoint = '/carts';

    // 1. جلب محتويات السلة (بناءً على الصورة التي أرسلتِها)
    async getAll() {
        const response = await httpClient.get(this.#endPoint);
        // نلاحظ أن البيانات موجودة داخل response.data.data
        return response.data.data;
    }

    // 2. إضافة منتج للسلة (POST store)
    async addToCart(payload) {
        // الـ payload غالباً يحتوي على { product_id, quantity }
        const response = await httpClient.post(this.#endPoint, payload);
        return response.data;
    }

    // 3. تحديث كمية منتج في السلة (PUT update)
    async updateQuantity(cartId, quantity) {
        // الرابط المتوقع: /carts/{cart_id}
        const response = await httpClient.put(`${this.#endPoint}/${cartId}`, { quantity });
        return response.data;
    }

    // 4. حذف منتج من السلة (DELETE delete)
    async removeItem(cartId) {
        // الرابط المتوقع: /carts/{cart_id}
        const response = await httpClient.delete(`${this.#endPoint}/${cartId}`);
        return response.data;
    }
}

export default new CartService();