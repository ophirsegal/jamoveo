import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/player");
  };

  return (
    <div className="login-bg d-flex align-items-center justify-content-center vh-100">
      <div className="card login-card shadow-lg p-4 text-white">
        <h2 className="text-center mb-4">Login to JaMoveo</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              name="username"
              type="text"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-success w-100">Login</button>
        </form>
        <p className="text-center mt-3 small">
          Don't have an account?{" "}
          <span
            className="text-info fw-bold pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
