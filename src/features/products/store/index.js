import { create } from 'zustand'
import { productInitState } from './state' // استيراد الحالة الأولية

// هذا هو مخزن Zustand (Store) الخاص بميزة المنتجات
export const useProductsState = create((setState) => ({
    
    // 1. الحالة الأولية (الـ data)
    ...productInitState, //
    
    // 2. دالة تحديث المنتج المحدد (تُستخدم لصفحة تفاصيل المنتج لاحقاً)
    setSelectedProduct: (product) => setState((state) => ({
        ...state,
        selectedProduct: product,
    })), //

    // 3. دالة setProducts: تُستخدم بواسطة useFetchProducts لتخزين قائمة المنتجات المجلوبة
    setProducts: (response) => {
        setState((state) => {
            return {
                ...state,
                products: response, //
            }
        })
    }, //
}))