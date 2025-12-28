import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Dash, Plus, Trash } from 'react-bootstrap-icons';
import { useCartState } from '../../store';
import './style.css'

function CartItem({ item }) {
  const { updateQuantity, removeFromCart, toggleItemSelection } = useCartState();

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const handleSelectionChange = (e) => {
    toggleItemSelection(item.id, e.target.checked);
  };

  const discountPercentage = item.discount || 0;
  const price = parseFloat(item.price) || 0;
  const originalPrice = discountPercentage > 0 ? price / (1 - discountPercentage / 100) : price;
  const finalPrice = price;
  const quantity = item.quantity || item.cartQuantity || 1;
  const hasDiscount = discountPercentage > 0; 

  return (
 
    <Card className="mb-3 bg-card">
      <Card.Body className=" p-3 d-flex align-items-center">
        <div className="me-3"> 
          <Form.Check
            className="red-checkbox"
            type="checkbox"
            checked={item.isSelected || false}
            id={`cart-item-check-${item.id}`}
            onChange={handleSelectionChange}
          />
        </div>

        <div className="cart me-3" >
          <img 
            src={item.image } 
            alt={item.name || item.title || 'Product'}
            className="img-fluid img-cart rounded-3"
            onError={(e) => {
              e.target.src = '/default-product.jpg';
            }}
          />
        </div>
        
        <div className="flex-grow-1 d-flex flex-column justify-content-between align-items-start">
          
          <div className="fw-bold mb-1" style={{ fontSize: '1.05rem' }}>
            {item.name || item.title || 'Product'}
          </div>

          {hasDiscount && (
            <div className="d-flex align-items-center mb-1">
              <span className="fw-bold me-2" style={{ color: '#ff8c00', fontSize: '0.85rem' }}>
                {discountPercentage}%
              </span>
              <span className="text-decoration-line-through text-muted" >
                ${originalPrice.toFixed(2)}
              </span>
            </div>
          )}

          <div className="fw-bold" style={{ color: '#dc3545', fontSize: '1.1rem' }}>
            ${finalPrice.toFixed(2)}
          </div>
        </div>
        
        <div className="d-flex flex-column align-items-end justify-content-between ms-auto h-100">
          
          <Button 
            variant="link" 
            className="text-danger p-0 mb-3" 
            onClick={handleRemove}
          >
            <Trash size={18} />
          </Button>
          
          <div className="d-flex align-items-center border rounded-3" style={{ height: '32px' }}>
            
            <Button 
              variant="light" 
              size="sm"
              className="p-1 border-0"
              style={{ lineHeight: '1', width: '32px', color: '#6c757d' }}
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
            >
              <Dash size={16} />
            </Button>
            
            {/* الكمية */}
            <span className="px-2 fw-bold" style={{ fontSize: '0.95rem' }}>
              {quantity}
            </span>
            
            {/* زر الإضافة */}
            <Button 
              variant="light" 
              size="sm"
              className="p-1 border-0"
              style={{ lineHeight: '1', width: '32px', color: '#6c757d' }}
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              <Plus size={16} />
            </Button>
            
          </div>
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default CartItem;