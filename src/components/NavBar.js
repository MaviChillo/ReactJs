import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'
import Logo from '../components/img/logo-but-1.png';
import CartWidget from '../components/img/cart2.png';
import '../style.css'

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand id="logo">
        <NavLink id="a" to="/">
            <img id="img-nav" src={Logo} alt=""></img>
            </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink id="a" to="/">Home</NavLink>
            <NavLink id="a" to='/category/1'>Remeras</NavLink>
            <NavLink id="a" to='/category/2'>Buzos</NavLink>
            <NavLink id="a" to='/category/3'>Accesorios</NavLink>
            <NavLink id="a" to="/">
            <img id="cartLogo" src={CartWidget} alt="cartLogo"></img>
                </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;