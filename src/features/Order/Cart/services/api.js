import { httpClient } from '/src/lib/axios';

class CartServices {
  #endPoint = "/carts";

  // جلب كافة المنتجات في السلة
  async getAllProductsInCart() {
    const response = await httpClient.get(`${this.#endPoint}`);
    return response?.data?.data;
  }

  async addProductToCart(product) {
    const response = await httpClient.post(`${this.#endPoint}`, product);
    return response?.data;
  }

  async updateCartItem(cartItemId, data) {
    const response = await httpClient.put(
      `${this.#endPoint}/${cartItemId}`,
      data
    );
    return response?.data;
  }

  // حذف عنصر من السلة بواسطة المعرف
  async deleteCartItem(cartItemId) {
    const response = await httpClient.delete(`${this.#endPoint}/${cartItemId}`);
    return response?.data;
  }
}

// تصدير نسخة وحيدة من الكلاس
export default new CartServices();