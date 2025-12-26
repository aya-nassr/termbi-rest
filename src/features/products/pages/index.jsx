import ProductList from "../components/ProductList/ProductsList";
import { useFetchProducts } from '../hooks/useFetchProducts';

function ProductsPage() {
    // جلب المنتجات عند تحميل الصفحة
    useFetchProducts();

    return (
        <>
            <ProductList />
        </>
    )
}

export default ProductsPage;