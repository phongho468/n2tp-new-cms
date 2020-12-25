import React from "react"
import { Image, Nav, Navbar, NavDropdown } from "react-bootstrap"
import "./header.scss"
import n2tpLogo from "../../assets/logos/n2tp.png"
import SmartDoseBrand from "../../component/smartdose/smartdose-brand"

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="nav-bar-wrapper">
        <Navbar.Brand href="/">
          <Image className="brand" src={n2tpLogo} alt="N2TP Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar"/>
        <Navbar.Collapse id="responsive-navbar">
          <Nav className="ml-auto">
            <NavDropdown className="nav-item mr-lg-5" id="products" title="Products">
              <NavDropdown.Item href="https://smartdose.ai" target="_blank">
                <SmartDoseBrand />
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-item mx-lg-5" href="/about">About</Nav.Link>
            <Nav.Link className="nav-item mx-lg-5" href="/team">Team</Nav.Link>
            <Nav.Link className="nav-item ml-lg-5" href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    )
  }
}

export default Header
