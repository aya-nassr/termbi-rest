
import { useState, useEffect } from 'react';
import ProductsService from '../services/api';
import { useProductsState } from '../store';

export function useFetchProducts() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const setProducts = useProductsState((state) => state.setProducts);
    const products = useProductsState((state) => state.products);

    useEffect(() => {
        if (products && products.length > 0) {
            return;
        }

        const fetchAndStoreProducts = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const data = await ProductsService.getAllProducts({});

                setProducts(data);

            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAndStoreProducts();

    }, [setProducts, products.length]);

    return { isLoading, error };
}