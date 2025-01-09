import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import "./Home.css";

function Thanks() {
  const navigate = useNavigate();

  return (
    <Container className="thanks-page">
      <div className="thanks-content">
        <div className="animation-container">
          <div className="checkmark-circle">
            <div className="checkmark"></div>
          </div>
        </div>
        <h1>Booking Confirmed!</h1>
        <p>
          Your tickets have been successfully booked. Get ready to enjoy your show!
        </p>
        <Button variant="primary" className="home-button" onClick={() => navigate("/")}>
          Ok
        </Button>
      </div>
    </Container>
  );
}

export default Thanks;
