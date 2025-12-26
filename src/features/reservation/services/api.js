import { httpClient } from '../../../lib/axios';

class ReservationService {
    // بناءً على الـ JSON الرابط هو reservations
    #endPoint = '/reservations';

    // 1. جلب الحجوزات
    async getAll() {
        try {
            // ملاحظة: الرابط في البوست مان يستخدم restaurant_admin_id=2 
            // إذا بدك تجلبي حجوزات مطعم معين:
            const response = await httpClient.get(this.#endPoint, {
                params: { restaurant_admin_id: 8 } 
            });
            return response.data.data; // المصفوفة اللي كانت فاضية عندك
        } catch (error) {
            throw error.response?.data?.message || "فشل جلب الحجوزات";
        }
    }

    // 2. إنشاء حجز جديد (POST)
    async create(reservationData) {
        try {
            // تنظيف البيانات وإزالة القيم الفارغة
            const cleanData = Object.fromEntries(
                Object.entries(reservationData).filter(([_, value]) => 
                    value !== null && value !== undefined && value !== ''
                )
            );
            
            console.log('Sending reservation data:', cleanData);
            const response = await httpClient.post(this.#endPoint, cleanData);
            return response.data;
        } catch (error) {
            console.error('Reservation API Error:', error.response?.data);
            throw error.response?.data || error.message || "فشل إرسال الحجز";
        }
    }

    // 3. جلب طاولات المطعم
    async getTables(restaurantId = 8) {
        try {
            const response = await httpClient.get('/restaurant-tables', {
                params: { restaurant_admin_id: restaurantId }
            });
            return response.data.data;
        } catch (error) {
            throw error.response?.data?.message || "فشل جلب الطاولات";
        }
    }

    // 4. جلب أنواع المناسبات
    async getEventTypes() {
        try {
            const response = await httpClient.get('/event-types');
            return response.data.data;
        } catch (error) {
            throw error.response?.data?.message || "فشل جلب أنواع المناسبات";
        }
    }

    // 5. حذف أو إلغاء حجز (DELETE)
    async delete(id) {
        try {
            const response = await httpClient.delete(`${this.#endPoint}/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data?.message || "فشل إلغاء الحجز";
        }
    }
}

export default new ReservationService();