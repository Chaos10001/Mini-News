import "./Slider-Slider.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import SideSlider from "./Side-Slider";
import DarkMode from "../../Utlities/Darkmode/DarkMode";

const SideContainer = () => {
  return (
    <>
      <Navbar
        bg="light"
        className="navbar-light shadow-lg d-none d-md-block sticky-top"
        expand="lg">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="fw-bolder h3 menu main-color pb-3">
            Mini-News
          </Navbar.Brand>
        <DarkMode />
        </Container>
      </Navbar>
    </>
  );
};

export default SideContainer;
