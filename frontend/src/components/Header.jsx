import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from "react-router-bootstrap"

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand >Online Shop</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/cart">
            <Nav.Link ><i className="fas fa-shopping-cart"></i>&nbsp;Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signin">
            <Nav.Link ><i className='fas fa-user'></i>&nbsp;SINGIN</Nav.Link>
            </LinkContainer>
            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
