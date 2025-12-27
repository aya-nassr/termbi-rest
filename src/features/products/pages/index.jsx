import ProductList from "../components/ProductList/ProductsList";
import { useFetchProducts } from '../hooks/useFetchProducts';

function ProductsPage() {
        useFetchProducts();

    return (
        <>
            <ProductList />
        </>
    )
}

export default ProductsPage;