import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import banklogo from "../app/assets/banklogo.jpg";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar dark color="success" sticky="top" expand="lg">
      <NavbarBrand className="ms-5" href="/">
        <img src={banklogo} alt="bank logo" className="float-start" />
        <h1 className="mt-0">Arrow Banking</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" to="/">
              <i className='fa fa-home fa-lg' /> Home
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to="/loans">
              <i className='fa fa-handshake-o fa-lg' aria-hidden="true" /> Loans

            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='/creditcards'>
              <i className="fa fa-credit-card fa-lg" /> Credit Cards
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='/about'>
              <i className='fa fa-info fa-lg' /> About Us

            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className='nav-link' to='contact'>
              <i className='fa fa-commenting-o fa-lg' /> Contact us
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header