import "./Slider-Slider.css";
import { HouseFill } from "react-bootstrap-icons";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const SideSlider = () => {
  return (
    <div className="shadow-lg main d-none d-md-block">
      <div>
        <ul className="list-unstyled">
          <li>
            <Link
              to="/"
              className="menu-item fw-bolder text-white py-3 mx-4 px-4 d-flex align-items-center text-decoration-none">
              <div className="menu-pill shadow-lg shadow-lg">
                <HouseFill />
                <span className="mx-2">Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="menu-item fw-bolder text-white py-3 mx-4 px-4 d-flex align-items-center text-decoration-none">
              <div className="menu-pill shadow-lg">
                <span className="mx-2">Local News</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/news-charts"
              className="menu-item text-white fw-bolder py-3 mx-4 px-4 d-flex align-items-center text-decoration-none">
              <div className="menu-pill shadow-lg">
                <span className="mx-2">News on Charts</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="menu-item fw-bolder text-white py-3 mx-4 px-4 d-flex align-items-center text-decoration-none">
              <div className="menu-pill shadow-lg">
                <span className="mx-2">Teams</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="menu-item fw-bolder text-white py-3 mx-4 px-4 d-flex align-items-center text-decoration-none">
              <div className="menu-pill shadow-lg">
                <span className="mx-2">Community</span>
              </div>
            </Link>
          </li>
          <li>
            <NavDropdown
              title="News"
              className="fw-bolder text-white menu-pill menu-item mx-5 mt-3  shadow-lg"
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
                to="latest">
                Latest Update
              </NavDropdown.Item>
            </NavDropdown>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideSlider;
