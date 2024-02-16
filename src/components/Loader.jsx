import Spinner from "react-bootstrap/Spinner";
import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default Loader;
