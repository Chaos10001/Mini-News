import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar
      bg="light"
      className="navbar-light shadow-lg d-md-none sticky-top"
      expand="lg">
      <Container>
        <Navbar.Brand className="fw-bolder main-color pb-3">
          Mini-News 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="main-color fw-bolder " as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className=" fw-bolder text-dark" as={Link} to="">
              News on 24hrs
            </Nav.Link>
            <Nav.Link className=" fw-bolder text-dark" as={Link} to="/news-charts">
              News on Chart
            </Nav.Link>
            <NavDropdown
              title="News"
              className=" fw-bolder text-dark"
              id="basic-nav-dropdown">
              <NavDropdown.Item
                className=" fw-bolder text-dark"
                as={Link}
                to="">
                News-Letter
              </NavDropdown.Item>
              <NavDropdown.Item
                className=" fw-bolder text-dark"
                as={Link}
                to="">
                News Forum
              </NavDropdown.Item>
              <NavDropdown.Item
                className=" fw-bolder text-dark"
                as={Link}
                to="/latest">
                Latest Update
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className=" fw-bolder text-dark" as={Link} to="">
              Teams
            </Nav.Link>
            <Nav.Link
              className=" fw-bolder text-dark"
              as={Link}
              to=""></Nav.Link>
            <Nav.Link className=" fw-bolder text-dark" as={Link} to="">
              Community
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
