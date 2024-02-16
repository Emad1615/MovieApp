import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "./LoginPage.module.css";
import { useAuht } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  const { Login, isAuthenticated, error, user } = useAuht();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function HandleSubmit(e) {
    e.preventDefault();
    Login(email, password);
  }
  useEffect(() => {
    if (isAuthenticated) navigate("/app", { replace: true });
  }, [isAuthenticated, navigate]);
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <section>
        <form onSubmit={HandleSubmit}>
          <fieldset>
            <legend>🌍 Login</legend>
            <hr />
            {error && <p className="text-center text-danger">{error}</p>}
            <div className=" form-group mb-3">
              <label className="form-label">E-mail</label>
              <input
                required
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
            </div>
            <div className=" form-group mb-3">
              <label className="form-label">Password</label>
              <input
                required
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
              />
            </div>
            <div className="form-group text-center">
              <button>Login 👉</button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
}

export default LoginPage;
