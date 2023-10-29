import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'


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
        <NavLink to={"/categoria/perros"} className="nav-link"> Perros </NavLink>
        <NavLink to={"/categoria/gatos"} className="nav-link"> Gatos </NavLink>
        <NavLink to={"/categoria/peces"} className="nav-link"> Peces </NavLink>
        <Link to={"/cart"}><CartWidget /></Link>
      </Container>
    </Navbar>
  )
}

export default NavBar 