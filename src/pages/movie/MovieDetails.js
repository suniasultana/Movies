// src/pages/movie/MovieDetails.js
import "./MovieDetails.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieVideos } from "../../api/tmdb"; // <-- note the ../../

function MovieDetails() {
  const { id } = useParams(); // movie id from URL
  const [trailer, setTrailer] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTrailer() {
      try {
        setError("");

        const data = await getMovieVideos(id);

        // Try to find a YouTube "Trailer"
        let youtubeTrailer =
          data.results?.find(
            (video) => video.site === "YouTube" && video.type === "Trailer"
          ) ||
          // If no Trailer, fall back to any YouTube video
          data.results?.find((video) => video.site === "YouTube") ||
          null;

        setTrailer(youtubeTrailer);
      } catch (err) {
        console.error("Error loading trailer:", err);
        setError("Failed to load trailer.");
      }
    }

    fetchTrailer();
  }, [id]);

  return (
  <div className="movie-container">
    <h1>Movie Trailer</h1>

    {error && <p className="error-text">{error}</p>}

    {trailer ? (
      <iframe
        className="trailer-iframe"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title={trailer.name || "Movie Trailer"}
        allowFullScreen
      />
    ) : error ? (
      <p>No trailer available for this movie.</p>
    ) : null}
  </div>
);
}

export default MovieDetails;
