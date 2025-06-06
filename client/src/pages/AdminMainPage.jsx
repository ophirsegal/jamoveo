import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

function AdminMainPage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    
    const dummyResults = [
      {
        id: 1,
        title: "Imagine",
        artist: "John Lennon",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1b/Imagine_%28John_Lennon_album%29.jpg",
        lyrics: "Imagine there's no heaven...",
        chords: "C  F  G  C"
      },
      {
        id: 2,
        title: "Let it be",
        artist: "The Beatles",
        image: "https://upload.wikimedia.org/wikipedia/en/2/25/LetItBe.jpg",
        lyrics: "When I find myself in times of trouble...",
        chords: "G  D  Em  C"
      }
    ];

    localStorage.setItem("searchResults", JSON.stringify(dummyResults));
    navigate("/results");
  };

  return (
    <div className="admin-bg d-flex flex-column justify-content-center align-items-center vh-100 text-white p-4">
      <h1 className="mb-4">Search for a Song</h1>
      <form onSubmit={handleSearch} className="w-100" style={{ maxWidth: "500px" }}>
        <input
          type="text"
          className="form-control form-control-lg mb-3"
          placeholder="Enter song or artist name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-100">Search</button>
      </form>
    </div>
  );
}

export default AdminMainPage;
