import { userStorage } from '../../auth/storage';

const API_BASE_URL = 'http://localhost:8000/api';

export const profileAPI = {
  updateProfile: async (profileData) => {
    const token = userStorage.getToken();
    
    const response = await fetch(`${API_BASE_URL}/profile/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(profileData)
    });

    if (!response.ok) {
      throw new Error('Failed to update profile');
    }

    return response.json();
  }
};