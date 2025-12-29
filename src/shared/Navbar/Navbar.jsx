import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';
import { useNavigate, Link } from 'react-router-dom';
import { Cart } from 'react-bootstrap-icons';
import { useAuth } from '/src/features/auth/context/AuthContext';
import { useCartState } from '/src/features/Order/Cart/store/state';
import AuthButtons from '/src/shared/components/AuthButtons';

import logo from '/src/assets/img/logo.png';
import menuIcon from '/src/assets/img/usa.png';

function AppNav() {
    const navigate = useNavigate();
    const { isLoggedIn, logout } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const { getTotalItems } = useCartState();
    const totalItems = getTotalItems();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Search query:', searchQuery);
    };

    const DropdownImage = (
        <img 
            src={menuIcon} 
            alt="Language Selector" 
            height="30"
        />
    );
    
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-dark" data-bs-theme="dark">
            <Container>
                <div className="d-flex align-items-center">
                    <Navbar.Brand href="#home" className="me-3">
                        <img src={logo} alt="" height="20px" />
                    </Navbar.Brand>
                    
                    {isLoggedIn && (
                        <Form onSubmit={handleSearch} className="me-auto">
                            <InputGroup style={{width: '350px'}}>
                                <InputGroup.Text className="bg-white border-end-0">
                                    <i className="fas fa-search text-muted"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="search"
                                    placeholder="Search for any product"
                                    className="border-start-0 bg-white"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    
                                />
                            </InputGroup>
                        </Form>
                    )}
                </div>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center gap-3">
                        {!isLoggedIn && (
                            <>
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="#pricing">Services</Nav.Link>
                                <Nav.Link href="#pricing">About us</Nav.Link>
                                <Nav.Link href="/contact">Contact us</Nav.Link>
                            </>
                        )}
                        
                        <div className="d-flex align-items-center gap-3">
                            {isLoggedIn && (
                                <Link to="/cart" className="text-decoration-none">
                                    <Button variant="outline-light" className="position-relative">
                                        <Cart size={20} />
                                        {totalItems > 0 && (
                                            <Badge 
                                                bg="danger" 
                                                pill 
                                                className="position-absolute top-0 start-100 translate-middle"
                                            >
                                                {totalItems}
                                            </Badge>
                                        )}
                                    </Button>
                                </Link>
                            )}
                            
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title={DropdownImage}
                                menuVariant="dark"
                                
                            >
                            </NavDropdown>
                            
                            {isLoggedIn ? (
                                <NavDropdown
                                    id="user-dropdown"
                                    title={<i className="fas fa-user-circle fs-4" ></i>}
                                    menuVariant="dark"
                                    align="end"
                                >
                                    <NavDropdown.Item as={Link} to="/profile">
                                        <i className="fas fa-user me-2"></i>
                                        Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleLogout}>
                                        <i className="fas fa-sign-out-alt me-2"></i>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <AuthButtons />
                            )}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNav;