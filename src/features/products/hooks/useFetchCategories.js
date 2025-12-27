import { useEffect, useState } from 'react';
import { useProductsState } from '../store';
import ProductsServices from '../services/api';

export const useFetchCategories = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const setCategories = useProductsState((state) => state.setCategories);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsLoading(true);
                setError(null);
                
                const categoriesData = await ProductsServices.getAllCategories();
                setCategories(categoriesData || []);
                
            } catch (err) {
                console.error('Error fetching categories:', err);
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCategories();
    }, [setCategories]);

    return { isLoading, error };
};