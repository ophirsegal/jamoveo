import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminMainPage from "./pages/AdminMainPage";
import PlayerMainPage from "./pages/PlayerMainPage";
import LivePage from "./pages/LivePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin" element={<AdminMainPage />} />
        <Route path="/player" element={<PlayerMainPage />} />
        <Route path="/live" element={<LivePage />} />
      </Routes>
    </Router>
  );
}

export default App;
