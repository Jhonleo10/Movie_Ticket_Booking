import { React, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Navbar, Nav } from "react-bootstrap";
import "./Home.css";

function Theater() {
  const navigate = useNavigate();

  const theaters = [
    {
      name: "PVR:The Cinema Providence",
      timings: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
    },
    {
      name: "Shanmuga Cinemas",
      timings: ["10:15 AM", "2:00 PM", "6:00 PM", "9:45 PM"],
    },
    {
      name: "Jeeva Rukmani Cinemas",
      timings: ["11:00 AM", "3:00 PM", "7:30 PM", "10:00 PM"],
    },
    {
      name: "Ratna Theatre",
      timings: ["11:00 AM", "3:00 PM", "7:30 PM", "10:00 PM"],
    },
    {
      name: "Raja Talkies",
      timings: ["11:00 AM", "3:00 PM", "7:30 PM", "10:00 PM"],
    },
  ];

  const handleTimeSlotClick = (theaterName) => {
    navigate("/seatbooking", { state: { theaterName } });
  };

  const location = useLocation();
  const movie = location.state;

  const [darkMode, setDarkMode] = useState(false);
  const [selectedState, setSelectedState] = useState("Select Location");
  const [showModal, setShowModal] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar expand="lg" className="navbar-light bg-white shadow-sm mb-4">
        <Container fluid>
          <Navbar.Brand className="text-dark">
            <img src="../images/Logo.png" className="logo-1" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <input
                type="text"
                placeholder="Search for movies, events..."
                className="form-control me-2"
                style={{ width: "100%", maxWidth: "300px" }}
              />
            </Nav>
            <Nav>
              <Button
                className="location-button btn-sm"
                onClick={() => setShowModal(true)}
              >
                {selectedState}
              </Button>
              <Button
                variant="link"
                onClick={toggleDarkMode}
                className="dark-mode-toggle"
              >
                {darkMode ? "☀️" : "🌙"}
              </Button>
              <Link to="/login" className="btn btn-primary login-btn">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Movie Info */}
      <div className="theaterpage text-center">
        <h1 className="theatercontent">{movie.title}</h1>
        <img src={movie.banner} className="img-fluid omage" alt={movie.title} />
        <h1 className="theatercontent">{movie.releaseDate}</h1>
      </div>

      {/* Theater List */}
      <Container className="theater-list-section">
        <Row className="ms-5 g-5">
          {theaters.map((theater, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <Card className="theater-card h-100">
                <Card.Body>
                  <h5 className="theater-name">{theater.name}</h5>
                  <div className="timings-section d-flex flex-wrap gap-2 mt-3">
                    {theater.timings.map((time, idx) => (
                      <Button
                        key={idx}
                        variant="outline-danger"
                        className="timing-btn"
                        onClick={() => handleTimeSlotClick(theater.name)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

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
        <div className="footer-icons mt-3 d-flex justify-content-center gap-3">
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
          <Row className="mt-4 justify-content-center">
            <Col xs="auto">
              <a
                href="/aboutus"
                className={`footer-link ${darkMode ? "text-light" : "text-dark"}`}
              >
                About Us
              </a>
            </Col>
            <Col xs="auto">
              <a
                href="/contactus"
                className={`footer-link ${darkMode ? "text-light" : "text-dark"}`}
              >
                Contact Us
              </a>
            </Col>
            <Col xs="auto">
              <a
                href="/terms"
                className={`footer-link ${darkMode ? "text-light" : "text-dark"}`}
              >
                Terms of Service
              </a>
            </Col>
            <Col xs="auto">
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
}

export default Theater;
