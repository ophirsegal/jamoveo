import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Live.css";

function LivePage() {
  const navigate = useNavigate();
  const [autoScroll, setAutoScroll] = useState(false);

  const song = JSON.parse(localStorage.getItem("selectedSong")) || {
    title: "Unknown",
    artist: "Unknown",
    lyrics: "No lyrics available.",
    chords: "No chords.",
  };

  const role = localStorage.getItem("role") || "player";
  const instrument = localStorage.getItem("instrument") || "";

  const isSinger = instrument === "vocals";
  const isAdmin = role === "admin";

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        window.scrollBy({ top: 1, behavior: "smooth" });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [autoScroll]);

  const handleQuit = () => {
    localStorage.removeItem("selectedSong");
    navigate(isAdmin ? "/admin" : "/player");
  };

  return (
    <div className="live-bg text-white p-5 vh-100 overflow-auto">
      <h1 className="display-4 fw-bold">{song.title}</h1>
      <h4 className="text-secondary mb-4">By {song.artist}</h4>

      {!isSinger && (
        <pre className="chords mb-4 bg-dark p-3 rounded">{song.chords}</pre>
      )}

      <pre className="lyrics bg-secondary p-3 rounded">{song.lyrics}</pre>

      <div className="position-fixed bottom-0 end-0 m-4 d-flex gap-2">
        <button
          className="btn btn-outline-info"
          onClick={() => setAutoScroll(!autoScroll)}
        >
          {autoScroll ? "Stop Scroll" : "Start Scroll"}
        </button>

        {isAdmin && (
          <button className="btn btn-danger" onClick={handleQuit}>
            Quit Session
          </button>
        )}
      </div>
    </div>
  );
}

export default LivePage;
