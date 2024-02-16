import { useEffect } from 'react';
import { useAuht } from '../context/AuthContext';
import styles from './AppNav.module.css';
import { FaPowerOff } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

function AppNav() {
  const navigate = useNavigate();
  const { user, Logout, isAuthenticated } = useAuht();
  // useEffect(() => {
  //   if (!isAuthenticated) navigate("/", { replace: true });
  // }, [isAuthenticated, navigate]);
  return (
    <div className={styles.appNav}>
      <p className="text-uppercase ">
        <Link to={'/'}>
          <span>🍿</span>
        </Link>
      </p>
      <div className={styles.user}>
        <img src={user?.photo} alt="Avatar" />
        <p>
          Welcome, <strong>{user?.name}</strong>
        </p>
        <button
          onClick={() => {
            Logout();
          }}
        >
          <FaPowerOff />
        </button>
      </div>
    </div>
  );
}

export default AppNav;
