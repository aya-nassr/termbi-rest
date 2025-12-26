import { httpClient } from '../../../lib/axios';
import { userStorage } from '../storage';
//import { generateJWT } from '../../../shared/utilities/jwt';

class AuthServices {
    #endPoint = '/auth'

   async signUp(payload) {
    try {
        const response = await httpClient.post('/auth/register', payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (response.data && response.data.status === true) {
            return response.data; 
        }
    } catch (e) {
        throw e.response?.data?.message || "Registration failed";
    }
}

    async login(payload) {
        try {
            const response = await httpClient.post('/auth/login', payload);
            if (response.data && response.data.status === true) 
                return response.data.data;
            
        } catch (e) {
            throw e.response?.data?.message || e.message;
        }
    }

    async getMe() {
        const token = userStorage.get()
        const response = await httpClient.get(`${this.#endPoint}?token=${token}`);

        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
            return response.data[0];
        }

        return null;
    }
}

export default new AuthServices;