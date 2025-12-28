import ProductList from '../../../products/components/ProductList/ProductsList';

function MenuSection() {
  return (
    <ProductList 
      title="Menu" 
      description="Explore our special, tasteful dishes on the Restaurant Menu!" 
      showDownload={true}
    />
  );
}

export default MenuSection;