import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Navbar, Nav ,Card} from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import movies from "./Movies";
import upmovies from "./UpcomingMovies";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlay } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedState, setSelectedState] = useState("Select Location");
  const [showModal, setShowModal] = useState(false);
  const [notifyModal, setNotifyModal] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    setShowModal(false); 
  };

  const tamilNaduStates = [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Trichy",
    "Salem",
    "Tirunelveli",
    "Erode",
    "Vellore",
    "Thoothukudi",
    "Nagercoil",
    "Pondicherry",
  ];

  const navigate = useNavigate();


  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* Navbar */}
      <Navbar expand="lg" className="navbar-light bg-white shadow-sm mb-4">
        <Container>
          <Navbar.Brand className="text-dark"><img src="./images/Logo.png" className="logo-1" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <input
                type="text"
                placeholder="Search for movies, events..."
                className="form-control me-2"
                style={{ width: "300px" }}
              />
            </Nav>
            <Nav>
              <Button
                className="location-button btn-sm"
                onClick={() => setShowModal(true)}
              >
                {selectedState}
              </Button>
              <Button variant="link" onClick={toggleDarkMode} className="dark-mode-toggle">
                {darkMode ? "☀️" : "🌙"}
              </Button>
            </Nav>
            <Nav>
            <Link to="/login" className="btn btn-primary login-btn">
              Login
            </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

      {/* Location Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Your Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              {tamilNaduStates.map((state) => (
                <Col xs={4} key={state} className="mb-3">
                  <Button
                    variant="outline-primary"
                    className="state-button"
                    onClick={() => handleStateChange(state)}
                  >
                    {state}
                  </Button>
                </Col>
              ))}
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      

      {/* Links */}
      <Container fluid className="text-center mb-4">
        <Nav className="justify-content-center">
          {["Movies", "Upcoming Movies", "Events", "Streams"].map((item) => (
            <Nav.Item key={item}>
              <Nav.Link
                as={Link}
                to={`/${item.toLowerCase().replace(" ", "")}`}
                className={`nav-link ${darkMode ? "text-light" : "text-dark"}`}
              >
                {item}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>

      {/* Carousel */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./images/Banner1.png"
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/Banner2.png"
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/Banner3.png"
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>
      </div>

      {/* Recommended Movies */}
      <div>
      <Container className="home-page">
        <h2 className="section-title">Recommended Movies</h2>
        <Row className="movie-row">
          {movies.map((movie) => (
            <Col xs={6} sm={4} md={3} key={movie.id} className="movie-col">
              <Card className="movie-card">
                <div className="movie-card-image-container">
                  <Card.Img
                    variant="top"
                    src={movie.poster}
                    alt={movie.title}
                    className="movie-card-image"
                  />
                </div>
                <Card.Body
                  className={`glassmorphic-content ${
                    darkMode ? "dark-glass" : ""
                  }`}
                >
                  <Card.Title>{movie.title}</Card.Title>
                  <Button
                    onClick={() => navigate(`/moviedetails/${movie.id}`)}
                    className="view-details-button"
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>

    <div className="banner mt-3">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" alt="" />
    </div>
    {/* Upcoming Movies */}
    <Container className="home-page mt-5">
        <h2 className="section-title">Upcoming Movies</h2>
        <Row className="movie-row">
          {upmovies.map((movie) => (
            <Col xs={6} sm={4} md={3} key={movie.id} className="movie-col">
              <Card className="movie-card">
                <div className="movie-card-image-container">
                  <Card.Img
                    variant="top"
                    src={movie.poster}
                    alt={movie.title}
                    className="movie-card-image"
                  />
                </div>
                <Card.Body className={`glassmorphic-content ${darkMode ? "dark-glass" : ""}`}>
                  <Card.Title>{movie.title}</Card.Title>
                  <Button
                    onClick={() => setNotifyModal(true)}
                    className="view-details-button"
                  >
                    Notify Me
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal show={notifyModal} onHide={() => setNotifyModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Notify Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            You will be notified when bookings for this movie are available.
            Please check your registered email or contact details.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setNotifyModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


 



      {/* Footer */}
      <footer className="text-center mt-5">
        
        <hr className="my-4 footer-line" />
        <div className="footer-logo">
          <img
            src="./images/Logo.png"
            alt="Logo"
            height="40"
            className="Logo-2"
          />
        </div>
        <div className="footer-icons mt-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fa fa-youtube"></i>
          </a>
        </div>
        <Container>
          <Row className="mt-4">
            <Col>
              <a
                href="/aboutus"
                className={`footer-link ${darkMode ? "text-light" : "text-dark"}`}
              >
                About Us
              </a>
              <a
                href="/contactus"
                className={`footer-link ${darkMode ? "text-light" : "text-dark"}`}
              >
                Contact Us
              </a>
              <a
                href="/terms"
                className={`footer-link ${darkMode ? "text-light" : "text-dark"}`}
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className={`footer-link ${darkMode ? "text-light" : "text-dark"}`}
              >
                Privacy Policy
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
