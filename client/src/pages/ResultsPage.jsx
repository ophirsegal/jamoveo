import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Results.css";

function ResultsPage() {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedResults = localStorage.getItem("searchResults");
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  }, []);

  const handleSelect = (song) => {
    localStorage.setItem("selectedSong", JSON.stringify(song));
    navigate("/live");
  };

  return (
    <div className="results-bg container py-5">
      <h1 className="mb-4 text-white text-center">Search Results</h1>
      {results.length === 0 ? (
        <p className="text-center text-secondary">No results found.</p>
      ) : (
        <div className="row">
          {results.map((song) => (
            <div key={song.id} className="col-md-6 mb-4">
              <div
                className="result-card p-3 h-100 d-flex flex-column"
                onClick={() => handleSelect(song)}
                role="button"
              >
                <img
                  src={song.image}
                  alt={song.title}
                  className="img-fluid mb-3 rounded"
                />
                <h4>{song.title}</h4>
                <p className="text-muted">{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResultsPage;
