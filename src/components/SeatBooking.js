import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, Navbar, Nav, Modal } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import "./Home.css";

function SeatBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theaterName, movieName, moviePoster } = location.state;

  const totalSeats = 60; 
  const seatPrices = [100, 150, 200];
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = Array.from({ length: totalSeats }, (_, i) => ({
    id: i + 1,
    price: seatPrices[Math.floor(i / 20)],
  }));

  const handleSeatSelect = (seat) => {
    if (!selectedSeats.some((s) => s.id === seat.id)) {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleSeatRemove = (seatId) => {
    setSelectedSeats(selectedSeats.filter((seat) => seat.id !== seatId));
  };

  const [darkMode, setDarkMode] = useState(false);
  const [selectedState, setSelectedState] = useState("Select Location");
  const [showModal, setShowModal] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePayment = () => {
    setShowModal(false);
    navigate("/thanks");
  };

  return (
    <Container fluid className="seat-booking-container">
      {/* Navbar */}
      <Navbar expand="lg" className="navbar-light bg-white shadow-sm mb-4">
        <Container>
          <Navbar.Brand className="text-dark">
            <img src="./images/Logo.png" className="logo-1" alt="Logo" />
          </Navbar.Brand>
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

      {/* Movie and Theater Information */}
      <Row className="movie-info-row align-items-center mb-4">
      
        <Col xs={12} md={8}>
          <h1 className="seat-theater text-center">{theaterName}</h1>
        </Col>
      </Row>

      {/* Seat Grid */}
      <div className="seat-grid">
{seats.map((seat) => (
  <div
    key={seat.id}
    className={`seat ${selectedSeats.some((s) => s.id === seat.id) ? "selected" : ""}`}
    onClick={() => handleSeatSelect(seat)}
  >
    {seat.id}
  </div>
))}
</div>

      {/* Selected Seats */}
      {selectedSeats.length > 0 && (
        <div className="selected-seats mb-4">
          <h4>Selected Seats</h4>
          <ul className="list-unstyled">
            {selectedSeats.map((seat) => (
              <li key={seat.id} className="d-flex align-items-center justify-content-between">
                <span>
                  Seat {seat.id} - ₹{seat.price}
                </span>
                <FaTrashAlt
                  className="remove-icon text-danger"
                  onClick={() => handleSeatRemove(seat.id)}
                />
              </li>
            ))}
          </ul>
          <h5 className="text-end">
            Total: ₹{selectedSeats.reduce((total, seat) => total + seat.price, 0)}
          </h5>
          <Button
            variant="success"
            className="proceed-btn w-100"
            onClick={() => setShowModal(true)}
          >
            Proceed to Payment
          </Button>
        </div>
      )}

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Booking Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} className="text-center mb-3">
              <h5>{movieName}</h5>
              <p>Theater: {theaterName}</p>
              <p>Seats: {selectedSeats.map((seat) => seat.id).join(", ")}</p>
              <p>Total Amount: ₹{selectedSeats.reduce((total, seat) => total + seat.price, 0)}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handlePayment}>
            Pay Now
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default SeatBooking;






