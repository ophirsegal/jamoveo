import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminMainPage from "./pages/AdminMainPage";
import ResultsPage from "./pages/ResultsPage";
import LivePage from "./pages/LivePage";
import PlayerMainPage from "./pages/PlayerMainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/admin" element={<AdminMainPage />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/live" element={<LivePage />} />
      <Route path="/player" element={<PlayerMainPage />} />
    </Routes>
  );
}

export default App;
