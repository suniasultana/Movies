import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

function Header() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchText.trim();
    if (!trimmed) return;

    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("q") || "";
    setSearchText(q);
  }, [location.search]);

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          🎬 Movie Explorer
        </Link>

        <form
         className="search-form"
         onSubmit={handleSubmit}
         aria-label="Movie search form"
         role="search"

        >
          <input
          type="text"
          placeholder="Search movies..."
          aria-label="Search movie input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
         />
          <button type="submit" aria-label="Search button">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
