import styles from "./SpinnerFullPage.module.css";
import Spinner from "react-bootstrap/Spinner";

function SpinnerFullPage() {
  return (
    <div className={styles.spinnerContainer}>
      <Spinner animation="grow" variant="primary" />
    </div>
  );
}

export default SpinnerFullPage;
