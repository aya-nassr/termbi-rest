
import { Card, Row, Col } from 'react-bootstrap';
import { CartPlus } from 'react-bootstrap-icons';

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
        <Card className="h-100 border-0 shadow-sm" style={{ cursor: 'pointer', minHeight: '180px' }} onClick={() => onCardClick && onCardClick(product)}>
            <Row className="h-100 g-0">
                <Col md={6} className="d-flex">
                    <Card.Body className="d-flex flex-column justify-content-between w-100 p-3">
                        <div>
                            <Card.Title className="fw-bold text-dark mb-2">{product.title || product.name || 'Product Name'}</Card.Title>
                            <Card.Text className="text-muted fw-normal" style={{ fontSize: '0.95rem' }}>{truncateText(product.description)}</Card.Text>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-auto">
                            <span className="text-danger fw-bold fs-5">${product.price}</span>
                            <CartPlus size={20} color="#dc3545" style={{ cursor: 'pointer' }} onClick={(e) => handleAddToCart(e, product)} />
                        </div>
                    </Card.Body>
                </Col>
                <Col md={6}>
                    <Card.Img 
                        src={product.img || product.image || `https://training.tamkeen-dev.com/termc/public/storage/${product.image_path}` || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop&crop=center'} 
                        alt={product.title || product.name || 'Product'}
                        style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '0 0.375rem 0.375rem 0' }}
                        onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop&crop=center';
                        }}
                    />
                </Col>
            </Row>
        </Card>
    );
}

export default ProductCard;