import { useEffect } from "react";
import { useAuht } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const { isAuthenticated } = useAuht();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) return navigate("/login");
  }, [isAuthenticated, navigate]);
  return children;
}

export default ProtectedRoutes;
