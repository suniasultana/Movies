import axios from "axios";
 
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const TMDB_BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;
const TMDB_IMAGE_URL = process.env.REACT_APP_TMDB_IMAGE_URL;
const CORS_PROXY = process.env.REACT_APP_CORS_PROXY;
 
async function fetchFromTMDB(endpoint, params = "") {
  const tmdbUrl = `${TMDB_BASE_URL}${endpoint}?api_key=${API_KEY}${params}`;
  const proxiedUrl = `${CORS_PROXY}${encodeURIComponent(tmdbUrl)}`;

  if (process.env.NODE_ENV === "development") {
    console.log("Requesting:", proxiedUrl);
  }

  try {
    const res = await axios.get(proxiedUrl);
    return res.data;
  } catch (err) {
    console.error("TMDB Error:", err.message);
    throw err;
  }
}
 
 
export function getTrendingMovies() {
  return fetchFromTMDB("/trending/movie/day");
}
 
 
export function searchMovies(query) {
  const encoded = encodeURIComponent(query);
  return fetchFromTMDB("/search/movie", `&query=${encoded}`);
}
 
 
export function getMovieDetails(id) {
  return fetchFromTMDB(`/movie/${id}`);
}
 
 
export function getMovieCredits(id) {
  return fetchFromTMDB(`/movie/${id}/credits`);
}
 
 
export function getMovieReviews(id) {
  return fetchFromTMDB(`/movie/${id}/reviews`);
}
 
 
export function getSimilarMovies(id) {
  return fetchFromTMDB(`/movie/${id}/similar`);
}
 
 
export function getPosterUrl(path, size = "w500") {
  if (!path) return null;
  return `${TMDB_IMAGE_URL}${size}${path}`;
}
 
export function getMovieVideos(id) {
  return fetchFromTMDB(`/movie/${id}/videos`);
}
 
