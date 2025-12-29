

export const userStorage = {
    save: (data) => {
      
        localStorage.setItem('user_data', JSON.stringify(data));
    },
    get: () => {
        const data = localStorage.getItem('user_data');
        return data ? JSON.parse(data) : null;
    },
    getToken: () => {
        const data = userStorage.get();
        return data?.access_token || null;
    },
    clear: () => {
        localStorage.removeItem('user_data');
    }
};