import {React,useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import movies from "./Movies";
import upmovies from "./UpcomingMovies";
import { Container, Row, Col, Button, Modal, Navbar, Nav ,Card} from "react-bootstrap";
import "./Home.css";

const MovieDetails = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedState, setSelectedState] = useState("Select Location");
  const [showModal, setShowModal] = useState(false);
  const [notifyModal, setNotifyModal] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div className="container text-center mt-5">Movie not found!</div>;
  }

  return (
    
    <div className="movie-details-container">
       <div className={darkMode ? "dark-mode" : ""}>
      {/* Navbar */}
      <Navbar expand="lg" className="navbar-light bg-white shadow-sm mb-4">
        <Container>
          <Navbar.Brand className="text-dark"><img src="../images/Logo.png" className="logo-1" /></Navbar.Brand>
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
      </div>
      {/* Movie Banner */}
      <div
        className="movie-banner"
        style={{
          backgroundImage: `url(${movie.banner})`,
        }}
      >
        <div className="banner-overlay">
          <div className="container">
            <h1 className="movie-title">{movie.title}</h1>
            <button
              className="btn btn-outline-light watch-trailer-btn mt-3"
              onClick={() => window.open(movie.trailerUrl, "_blank")}
            >
              Watch Trailer
            </button>
            <p className="movie-details">
              {movie.genre} | {movie.runtime} | {movie.releaseDate}
            </p>
            <button
              className="btn btn-primary mt-3"
              onClick={() => navigate("/theaters/:id",{state:movie})}
            >
              Book Tickets
            </button>
          </div>
        </div>
      </div>

      {/* Movie Content */}
      <div className="container mt-4">
        <section className="about-section mb-5">
          <h2>About the Movie</h2>
          <p>{movie.description}</p>
        </section>
        <section className="cast-section text-center">
          <h2>Cast</h2>
          <div className="cast-list">
            {movie.cast.map((member, index) => (
              <div className="cast-card" key={index}>
                <img
                  src={member.photo}
                  alt={member.name}
                  className="cast-photo"
                />
                <p className="cast-name">{member.name}</p>
              </div>
            ))}
          </div>
        </section>
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
            src="../images/Logo.png"
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

export default MovieDetails;
