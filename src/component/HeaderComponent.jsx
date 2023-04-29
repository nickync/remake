import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "./AuthContext"

export default function HeaderComponent() {
  const navigate = useNavigate()
  const aboutPage = () => {
    navigate('/about')
  }
  const authContext = useAuth()

  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="dark" className="p-0 bg-transparent bg-gradient">
      <Container>
        <Navbar.Brand href="/" className="fw-bolder">ZEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="fs-6 btn-light" onClick={aboutPage}>{ authContext.lang === 'en' ? 'About' : '关于我' }</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
          <Nav.Link className="fs-6 btn-light" onClick={authContext.switchLanguage} > {authContext.lang === 'en' ? '中文' : 'English'}</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}