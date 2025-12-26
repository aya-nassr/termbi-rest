import { create } from 'zustand';

const useCheckoutStore = create((set) => ({
  paymentDetails: null,
  
  setPaymentDetails: (details) => set({ paymentDetails: details }),
  
  clearPaymentDetails: () => set({ paymentDetails: null })
}));

export default useCheckoutStore;