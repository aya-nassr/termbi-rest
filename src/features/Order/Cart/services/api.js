import { httpClient } from '/src/lib/axios';

class CartServices {
  #endPoint = "/carts";

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

  async deleteCartItem(cartItemId) {
    const response = await httpClient.delete(`${this.#endPoint}/${cartItemId}`);
    return response?.data;
  }
}

export default new CartServices();