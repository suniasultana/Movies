import React from "react";
import { Link } from "react-router-dom";
import { getPosterUrl } from "../api/tmdb";

function MovieCard({ movie }) {
  const poster = getPosterUrl(movie.poster_path);
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "N/A";
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      {poster ? (
  <img
  src={movie.poster_path ? imageUrl + movie.poster_path : "/fallback.jpg"}
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "/fallback.jpg";
  }}
  alt={movie.title}
  className="movie-poster"
/>
) : (
  <div className="movie-card-placeholder">No Image</div>
)}
    </Link>
  );
}

export default MovieCard;