import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function LivePage() {
  const navigate = useNavigate();
  const [autoScroll, setAutoScroll] = useState(false);

  const song = JSON.parse(localStorage.getItem("selectedSong")) || {
    title: "Imagine",
    artist: "John Lennon",
    lyrics: "Imagine there's no heaven...\nIt's easy if you try...",
    chords: "C   F   G   C",
  };

  const role = localStorage.getItem("role") || "user";
  const instrument = localStorage.getItem("instrument") || "vocals";

  const isAdmin = role === "admin";
  const isSinger = instrument === "vocals";

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
    <div className="p-5 bg-dark text-white" style={{ minHeight: "100vh" }}>
      <h1 className="mb-2">{song.title}</h1>
      <h4 className="mb-4 text-secondary">By {song.artist}</h4>

      {!isSinger && <pre className="fs-5 mb-4">{song.chords}</pre>}
      <pre className="fs-6">{song.lyrics}</pre>

      <div className="d-flex justify-content-between mt-5">
        {isAdmin && (
          <button className="btn btn-danger" onClick={handleQuit}>
            Quit Session
          </button>
        )}
        <button
          className="btn btn-outline-light ms-auto"
          onClick={() => setAutoScroll(!autoScroll)}
        >
          {autoScroll ? "Stop Scroll" : "Start Scroll"}
        </button>
      </div>
    </div>
  );
}

export default LivePage;
