import { httpClient } from "../../../lib/axios";

class ProductsServices {اً

  async getAllProducts(params = {}) {
   
    const { sort = 'name', category_id = null } = params;

    const response = await httpClient.get("/products", {
      params: {
        restaurant_admin_id: 8,
        sort_term: "asc",
        sort_by: sort,
        category_id: category_id, 
      },
    });

    return response.data?.data;
  }

 
  async getAllCategories() {
    const response = await httpClient.get(`/categories?with_products=1&restaurant_admin_id=8&sort_term=desc&sort_by=name`);
    return response.data?.data;
  }
}

export default new ProductsServices();