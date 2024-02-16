import { useState } from "react";
import styles from "./Box.module.css";
function Box({ children }) {
  const [show, setShow] = useState(true);
  return (
    <div className={`${styles.boxContainer} `}>
      <div className={styles.btnShow}>
        <button
          className={styles.btnShow}
          onClick={() => setShow((show) => !show)}
        >
          {show ? "➖" : "➕"}
        </button>
      </div>
      {show ? children : null}
    </div>
  );
}

export default Box;
