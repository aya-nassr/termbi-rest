import { Container, Row, Col, Nav, Button, Spinner, Alert } from 'react-bootstrap';
import { useState, useMemo } from 'react';
import { CartPlus } from 'react-bootstrap-icons';
import ProductCard from '../ProductCard/ProductCard';
import ProductModal from '../ProductModal/ProductModal';
import { useFetchProducts } from '../../hooks/useFetchProducts'; 
import { useFetchCategories } from '../../hooks/useFetchCategories';
import { useProductsState } from '../../store';
import { useCartState } from '../../../Order/Cart/store';
import toast from 'react-hot-toast';
import Pagination from 'react-bootstrap/Pagination';
import './style.css';

function ProductList({ title = "Products", description = "Explore our delicious menu items!", showDownload = false }) {
    const [activeCategory, setActiveCategory] = useState('All');
    const [viewMode, setViewMode] = useState('card');
    const [sortBy, setSortBy] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    
    const { isLoading, error } = useFetchProducts();
    const { isLoading: categoriesLoading } = useFetchCategories();
    const products = useProductsState((state) => state.products);
    const categories = useProductsState((state) => state.categories);
    const addToCart = useCartState((state) => state.addToCart);

    const handleAddToCart = async (item) => {
        try {
            await addToCart(item);
            toast.success(`${item.name || 'Product'} added to cart!`);
        } catch (error) {
            console.error('Failed to add to cart:', error);
            toast.error('Failed to add item to cart');
        }
    };

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    const categoryOptions = useMemo(() => {
        const allCategories = ['All'];
        if (categories && categories.length > 0) {
            categories.forEach(cat => {
                if (cat.name) {
                    allCategories.push(cat.name);
                }
            });
        }
        return allCategories;
    }, [categories]);

    const filteredProducts = useMemo(() => {
        if (!products) return [];
        if (activeCategory === 'All') return products;

        return products.filter(product => {
            const category = categories.find(cat => cat.id === product.category_id);
            return category?.name === activeCategory;
        });
    }, [products, activeCategory, categories]);

    const menuItems = useMemo(() => {
        const items = [...filteredProducts];
        if (sortBy === 'price') {
            return items.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'name') {
            return items.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
        }
        return items;
    }, [filteredProducts, sortBy]);

    const totalPages = Math.ceil(menuItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = menuItems.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useMemo(() => {
        setCurrentPage(1);
    }, [activeCategory, sortBy]);

    if (isLoading || categoriesLoading) {
        return (
            <Container className="text-center py-5">
                <Spinner animation="border" variant="danger" />
                <p className="mt-2">Loading products...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="py-5">
                <Alert variant="danger">
                   Error loading products: {error.message || "Something went wrong"}
                </Alert>
            </Container>
        );
    }
    
    if (!products || products.length === 0) {
        return (
            <Container className="text-center py-5">
                <Alert variant="info">No products available.</Alert>
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <Row>
                <Col>
                    <h1 className="text-center text-dark fw-bold mb-2">
                        Our <span className="text-danger">{title}</span>
                    </h1>
                    <p className="text-center fs-5 mb-4">{description}</p>
                    
                    {/* أزرار التصنيفات */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <Nav variant="pills" className="flex-grow-1 justify-content-center flex-wrap">
                            {categoryOptions.map((category) => (
                                <Nav.Item key={category}>
                                    <Nav.Link 
                                        active={activeCategory === category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`mx-2 mb-2 ${activeCategory === category ? 'bg-danger' : 'text-dark border'}`}
                                    >
                                        {category}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </div>
               
                    <div className="d-flex justify-content-center align-items-center mb-4 gap-2 flex-wrap">
                        <Button 
                            variant={viewMode === 'card' ? 'danger' : 'outline-secondary'}
                            onClick={() => setViewMode('card')}
                        >
                            View as Card
                        </Button>
                        <Button 
                            variant={viewMode === 'list' ? 'danger' : 'outline-secondary'}
                            onClick={() => setViewMode('list')}
                        >
                            View as List
                        </Button>

                        <div className="vr mx-2 d-none d-md-block"></div>
                         
                        <Button 
                            variant={sortBy === 'name' ? 'danger' : 'outline-secondary'}
                            onClick={() => setSortBy('name')}
                        >
                            Sort by Name
                        </Button>
                        <Button 
                            variant={sortBy === 'price' ? 'danger' : 'outline-secondary'}
                            onClick={() => setSortBy('price')}
                        >
                            Sort by Price
                        </Button>

                        {showDownload && (
                            <Button variant="outline-danger" onClick={() => {
                                const menuText = products
                                    .map(item => `${item.name} - $${item.price}\n${item.description}\n`)
                                    .join('\n');
                                const blob = new Blob([menuText], { type: 'text/plain' });
                                const url = URL.createObjectURL(blob);
                                const a = document.createElement('a');
                                a.href = url; a.download = 'menu.txt'; a.click();
                            }}>
                                Download Menu
                            </Button>
                        )}
                    </div>

                    {menuItems && menuItems.length > 0 ? (
                        <>
                            {viewMode === 'card' ? (
                                <Row className='py-4'>
                                    {currentItems.map((item) => (
                                        <Col md={6} lg={4} key={item.id} className="mb-4">
                                            <ProductCard 
                                                product={item} 
                                                onAddToCart={handleAddToCart}
                                                onCardClick={handleCardClick}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            ) : (
                                <div className="mb-5">
                                    {currentItems.map((item) => (
                                        <div key={item.id} className="d-flex justify-content-between align-items-center py-3 border-bottom">
                                            <div>
                                                <h6 className="mb-1 fw-bold text-dark">{item.name}</h6>
                                                <p className="mb-0 text-muted small">{item.description}</p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <span className="text-danger fw-bold me-3">${item.price}</span>
                                                <CartPlus className='cart-btn' size={24}  onClick={() => handleAddToCart(item)} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            
                            {totalPages > 1 && (
                                <div className="d-flex justify-content-center mt-4">
                                    <Pagination className="custom-pagination">
                                        <Pagination.First 
                                            onClick={() => handlePageChange(1)}
                                            disabled={currentPage === 1}
                                        />
                                        <Pagination.Prev 
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                        />
                                        
                                        {[...Array(totalPages)].map((_, index) => {
                                            const page = index + 1;
                                            return (
                                                <Pagination.Item
                                                    key={page}
                                                    active={page === currentPage}
                                                    onClick={() => handlePageChange(page)}
                                                >
                                                    {page}
                                                </Pagination.Item>
                                            );
                                        })}
                                        
                                        <Pagination.Next 
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                        />
                                        <Pagination.Last 
                                            onClick={() => handlePageChange(totalPages)}
                                            disabled={currentPage === totalPages}
                                        />
                                    </Pagination>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-5">
                            <Alert variant="info">
                                No products found in this category.
                            </Alert>
                        </div>
                    )}
                </Col>
            </Row>
            
            <ProductModal 
                show={showModal}
                onHide={handleCloseModal}
                product={selectedProduct}
                onAddToCart={handleAddToCart}
            />
        </Container>
    );
}

export default ProductList;