
import { Card, Row, Col } from 'react-bootstrap';
import { CartPlus } from 'react-bootstrap-icons';
import './style.css'

function ProductCard({ product, onAddToCart, onCardClick }) {
    
    const handleAddToCart = (e, product) => {
        e.stopPropagation();
        onAddToCart(product);
    };
    
    const truncateText = (text, maxLength = 80) => {
        if (!text) return 'No description available';
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };
    
    return (
        <Card  className="card h-100 shadow-sm d-flex flex-column"  onClick={() => onCardClick && onCardClick(product)}>
            <Row>
                <Col md={6} >
                    <Card.Body className="d-flex flex-column p-3">
                        <div className="flex-grow-1">
                            <Card.Title className="fw-bold ">{product.title || product.name || 'Product Name'}</Card.Title>
                            <Card.Text className="text-muted">{truncateText(product.description)}</Card.Text>
                        </div>
                    </Card.Body>
                </Col>
                <Col md={6}>
                    <Card.Img 
                        src={product.img || product.image || `https://training.tamkeen-dev.com/termc/public/storage/${product.image_path}` || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop&crop=center'} 
                        alt={product.title || product.name || 'Product'}
                        className='prooduct-img'
                        onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop&crop=center';
                        }}
                    />
                </Col>
            </Row>
            <div className="d-flex justify-content-between align-items-center p-3  mt-auto">
                <span className="text-danger fw-bold fs-5">${product.price}</span>
                <CartPlus className='cart-btn fw-bold text-danger' size={23}  onClick={(e) => handleAddToCart(e, product)} />
            </div>
        </Card>
    );
}

export default ProductCard;