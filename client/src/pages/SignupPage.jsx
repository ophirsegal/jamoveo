import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    instrument: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // אמור להתחבר לשרת בהמשך
    navigate("/");
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h2>Sign Up to JaMoveo</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Username</label>
            <input
              name="username"
              type="text"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label>Instrument</label>
            <select
              name="instrument"
              className="form-select"
              onChange={handleChange}
              required
            >
              <option value="">Choose instrument</option>
              <option value="guitar">Guitar</option>
              <option value="drums">Drums</option>
              <option value="vocals">Vocals</option>
              <option value="keyboard">Keyboard</option>
              <option value="bass">Bass</option>
            </select>
          </div>

          <button className="btn btn-success w-100">Sign Up</button>
        </form>
        <p className="text-center mt-3 small">
          Already have an account?{" "}
          <span
            className="text-info fw-bold pointer"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;