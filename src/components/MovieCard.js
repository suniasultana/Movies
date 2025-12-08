import React from "react";
import { Link } from "react-router-dom";
import { getPosterUrl } from "../api/tmdb";
const TMDB_IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;
function MovieCard({ movie }) {
  const poster = getPosterUrl(movie.poster_path);
  
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      {poster ? (
  <img
  src={movie.poster_path ? TMDB_IMAGE_URL + movie.poster_path : "/fallback.jpg"}
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