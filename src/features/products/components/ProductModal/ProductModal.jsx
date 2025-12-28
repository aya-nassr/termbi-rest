import { Modal, Row, Col, Button, Form, Dropdown } from 'react-bootstrap';
import { useState } from 'react';

function ProductModal({ show, onHide, product, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [specialRequest, setSpecialRequest] = useState('');
    const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

    if (!product) return null;

    const productOptions = [
        { name: 'Extra sauce', price: 5 },
        { name: 'With Mushrooms', price: 5 },
        { name: 'With Ketchup', price: 5 },
        { name: 'Extra Cream', price: 5 }
    ];

    const handleOptionChange = (optionName, isChecked) => {
        setSelectedOptions(prev => ({
            ...prev,
            [optionName]: isChecked
        }));
    };

    const calculateTotalPrice = () => {
        const basePrice = product.price;
        const optionsPrice = Object.entries(selectedOptions)
            .filter(([, isSelected]) => isSelected)
            .reduce((total, [optionName]) => {
                const option = productOptions.find(opt => opt.name === optionName);
                return total + (option ? option.price : 0);
            }, 0);
        return (basePrice + optionsPrice) * quantity;
    };

    const handleAddToCart = () => {
        const productWithOptions = {
            ...product,
            quantity,
            selectedOptions,
            specialRequest,
            totalPrice: calculateTotalPrice()
        };
        onAddToCart(productWithOptions);
        onHide();
        setQuantity(1);
        setSelectedOptions({});
        setSpecialRequest('');
    };

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Body className="p-0">
                <Row className="g-0">
                    <Col md={6}>
                        <img
                            src={product.img || product.image || `https://training.tamkeen-dev.com/termc/public/storage/${product.image_path}` || 'https://via.placeholder.com/400x400?text=No+Image'}
                            alt={product.title || product.name || 'Product'}
                            className="product-img w-100 h-100"
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/400x400?text=No+Image';
                            }}
                        />
                    </Col>
                    <Col md={6} className="p-4">
                        <div className="d-flex flex-column h-100">
                            <div>
                                <h4 className="fw-bold text-dark mb-2">{product.title || product.name || 'Product Name'}</h4>
                                <h5 className="text-danger fw-bold mb-3">{product.price} $</h5>
                                <p className="text-muted mb-4">{product.description}</p>

                                <div className="mb-4">
                                    <h6 className="fw-bold mb-3">Product Options</h6>
                                    <Dropdown show={showOptionsDropdown} onToggle={setShowOptionsDropdown}>
                                        <Dropdown.Toggle
                                            variant="outline-secondary"
                                            className="w-100 text-start d-flex justify-content-between align-items-center"

                                        >
                                            Choose Option
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="w-100">
                                            {productOptions.map((option, index) => (
                                                <Dropdown.Item key={index} as="div" className="d-flex justify-content-between align-items-center">
                                                    <Form.Check
                                                        type="checkbox"
                                                        label={option.name}
                                                        checked={selectedOptions[option.name] || false}
                                                        onChange={(e) => handleOptionChange(option.name, e.target.checked)}
                                                    />
                                                    <span className="text-danger fw-bold">+ {option.price}$</span>
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>

                                <div className="mb-4">
                                    <h6 className="fw-bold mb-2">Special Request</h6>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Tell us if you have: an allergy, an ingredient you don't like, etc."
                                        value={specialRequest}
                                        onChange={(e) => setSpecialRequest(e.target.value)}

                                    />
                                </div>
                            </div>

                            <div className="mt-auto">
                                <div className="d-flex align-items-center gap-2">
                                    <Button
                                        variant="outline-secondary"
                                        size="sm"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}

                                    >
                                        -
                                    </Button>
                                    <span className="fw-bold mx-2">{quantity}</span>
                                    <Button
                                        variant="outline-secondary"
                                        size="sm"
                                        onClick={() => setQuantity(quantity + 1)}

                                    >
                                        +
                                    </Button>

                                    <Button
                                        variant="danger"
                                        className="flex-grow-1 fw-bold ms-3"
                                        onClick={handleAddToCart}
                                    >
                                        Add to Cart    {calculateTotalPrice()}$
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default ProductModal;