import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
//import { NavLink } from "react-router-dom";
import banklogo from "../app/assets/banklogo.jpg";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar dark color="success" sticky="top" expand="md">
      <NavbarBrand className="ms-5" href="/">
        <img src={banklogo} alt="bank logo" className="float-start" />
        <h1 className="mt-1">Arrow Banking</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          {/* Nav items and links go here */}
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header