import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "./Movies";

const MovieTrailer = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="text-center">
        <h2>Trailer not found</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <iframe
        title={movie.title}
        src={movie.trailer}
        allow="autoplay; fullscreen"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
      <div style={{ position: "absolute", top: "10px", left: "10px" }}>
        <Link
          to={`/moviedetails/${movie.id}`}
          className="btn btn-light"
          style={{ opacity: 0.8 }}
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default MovieTrailer;
