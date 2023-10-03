import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'


function NavBar() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/assets/images/icono.png"
                        width="70"
                        height="70"
                    />{" "}
                    PETSHOP
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Nosotros</Nav.Link>
                        <NavDropdown title="Tienda" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Perros</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Gatos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Peces</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Ver Carrito de Compras</NavDropdown.Item>
                        </NavDropdown>
                        <CartWidget/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar 