import React from 'react';
import { Container, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <Container className="text-center py-5">
      <Alert variant="info" className="p-4">
        <h4>Your Cart is Empty</h4>
        <p>You haven't added any items to your cart yet</p>
        <Link to="/products">
          <Button variant="danger">
            Browse Products
          </Button>
        </Link>
      </Alert>
    </Container>
  );
}

export default EmptyCart;