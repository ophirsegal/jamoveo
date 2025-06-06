import { useNavigate } from "react-router-dom";
import "../styles/Results.css";

function ResultsPage() {
  const navigate = useNavigate();
  const results = JSON.parse(localStorage.getItem("searchResults")) || [];

  const handleSelect = (song) => {
    localStorage.setItem("selectedSong", JSON.stringify(song));
    navigate("/live");
  };

  return (
    <div className="results-bg p-5 text-white">
      <h2 className="mb-4">Search Results</h2>
      <div className="row">
        {results.map((song) => (
          <div className="col-md-6 mb-4" key={song.id}>
            <div className="card bg-dark text-white h-100">
              <img src={song.image} className="card-img-top" alt={song.title} />
              <div className="card-body">
                <h5 className="card-title">{song.title}</h5>
                <p className="card-text">By {song.artist}</p>
                <button
                  className="btn btn-success w-100"
                  onClick={() => handleSelect(song)}
                >
                  Select Song
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsPage;
