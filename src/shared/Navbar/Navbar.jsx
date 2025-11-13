import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '/src/assets/img/logo.png';
import menuIcon from '/src/assets/img/usa.png';

function AppNav() {
    const DropdownImage = (
    <img 
      src={menuIcon} 
      alt="Language Selector" 
      height="30"
    />
  );
  return (
  
       <Navbar collapseOnSelect expand="lg" className="bg-dark" data-bs-theme="dark">
      <Container  >
        <Navbar.Brand href="#home" ><img src={logo} alt="" height="20px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-lg-5">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
            <Nav.Link href="#pricing">Contact us</Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={DropdownImage}
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
             <Button variant="outline-light" className="px-5">log in</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNav;