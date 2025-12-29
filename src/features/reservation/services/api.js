import { httpClient } from '../../../lib/axios';

class ReservationService {
    #endPoint = '/reservations';

    async getAll() {
        try {
            const response = await httpClient.get(this.#endPoint, {
                params: { restaurant_admin_id: 8 } 
            });
            return response.data.data;
        } catch (error) {
            throw error.response?.data?.message || "Failed to fetch reservations";
        }
    }

    async create(reservationData) {
        try {
            const cleanData = Object.fromEntries(
                Object.entries(reservationData).filter(([ , value]) => 
                    value !== null && value !== undefined && value !== ''
                )
            );
            
            console.log('Sending reservation data:', cleanData);
            const response = await httpClient.post(this.#endPoint, cleanData);
            return response.data;
        } catch (error) {
            console.error('Reservation API Error:', error.response?.data);
            throw error.response?.data || error.message || "Failed to submit reservation";
        }
    }

    async getTables(restaurantId = 8) {
        try {
            const response = await httpClient.get('/restaurant-tables', {
                params: { restaurant_admin_id: restaurantId }
            });
            return response.data.data;
        } catch (error) {
            throw error.response?.data?.message || "Failed to fetch tables";
        }
    }

    async getEventTypes() {
        try {
            const response = await httpClient.get('/event-types');
            return response.data.data;
        } catch (error) {
            throw error.response?.data?.message || "Failed to fetch event types";
        }
    }

    async delete(id) {
        try {
            const response = await httpClient.delete(`${this.#endPoint}/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data?.message || "Failed to cancel reservation";
        }
    }
}

export default new ReservationService();