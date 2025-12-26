// src/features/products/hooks/useFetchProducts.js

import { useState, useEffect } from 'react';

// استيراد الـ Service لجلب البيانات
import ProductsService from '../services/api'; 
// استيراد الـ Store للوصول إلى دالة التخزين (setProducts) وبيانات المنتجات الحالية
import { useProductsState } from '../store';

export function useFetchProducts() {
    // حالة للتحميل وحالة للأخطاء
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    // 👈 الحصول على الدالة setProducts لتحديث Zustand
    const setProducts = useProductsState((state) => state.setProducts);
    // 👈 الحصول على المنتجات الحالية للتحقق من وجودها (منطق الـ Caching)
    const products = useProductsState((state) => state.products);

    useEffect(() => {
        // 1. منع الجلب المكرر إذا كانت البيانات موجودة بالفعل في المخزن
        if (products && products.length > 0) {
            return;
        }
        
        const fetchAndStoreProducts = async () => {
            setIsLoading(true);
            setError(null); // مسح الأخطاء السابقة
            
            try {
                // 2. جلب البيانات من الـ Service (الذي يتصل بـ json-server)
                const data = await ProductsService.getAll(); 
                
                // 3. تخزين البيانات الجديدة في Zustand
                setProducts(data); 

            } catch (err) {
                // 4. إدارة الأخطاء (سيتم التعامل معها أيضاً في interceptors الـ axios)
                setError(err);
                // هنا يمكنك إضافة رسالة توست مخصصة إذا لزم الأمر
            } finally {
                setIsLoading(false);
            }
        };

        fetchAndStoreProducts(); 
        
    }, [setProducts, products.length]); 
    // الاعتماد على setProducts و products.length لضمان التنفيذ الصحيح عند التغيير

    // إرجاع حالة التحميل والأخطاء للمكون الذي سيستخدم هذا الـ Hook
    return { isLoading, error };
}