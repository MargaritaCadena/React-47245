import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


function NavBar() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
            <Container>
                <Link to={"/"}>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src="/assets/images/icono.png"
                            width="70"
                            height="70"
                        />{" "}
                        PETSHOP
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={"/categoria/perros"}>Perros</Link>
                        <Link to={"/categoria/gatos"}>Gatos</Link>
                        <Link to={"/categoria/peces"}>Peces</Link>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar 