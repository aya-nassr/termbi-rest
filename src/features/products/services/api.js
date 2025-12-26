// src/features/products/services/api.js

import { httpClient } from '../../../lib/axios';
import { sleep } from '../../../shared/utilities/sleep';

class ProductsService {
    #endPoint = '/products'

    async getAll() {
        await sleep(1000);
        const response = await httpClient.get(this.#endPoint);
        return response.data.data;
    }

    async getById(id) {
        await sleep(1000);
     
        const response = await httpClient.get(`${this.#endPoint}/${id}`); 
        return response.data.data;
    }

    async create(payload) {

        const formData = new FormData();
        Object.keys(payload).forEach(key => {
            formData.append(key, payload[key]);
        });
        
        const response = await httpClient.post(this.#endPoint, formData);
        return response.data;
    }

    async update(id, payload) {
        const response = await httpClient.put(`${this.#endPoint}/${id}`, payload);
        return response.data
    }

    async delete(id) {
        const response = await httpClient.delete(`${this.#endPoint}/${id}`);
        return response.data
    }

}

export default new ProductsService();