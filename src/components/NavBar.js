import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../components/img/logo-but-1.png';
import CartWidget from '../components/img/cart2.png';
import '../style.css'

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand id="logo" href="#home">
            <img id="img-nav" src={Logo} alt=""></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="a" href="#home">Home</Nav.Link>
            <Nav.Link id="a" href="#home">Contact</Nav.Link>
            <Nav.Link id="a" href="#home">
            <img id="cartLogo" src={CartWidget} alt=""></img>
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;