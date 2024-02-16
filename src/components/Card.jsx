import styles from "./Card.module.css";
import { MdBookmarkAdded } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { GoStarFill } from "react-icons/go";
import { Badge } from "react-bootstrap";
function Card({ movie }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <img src={movie.Poster} alt="Poster" />
        <div className={styles.frame}>
          <h3>{movie.Title}</h3>
          <p>Year | {movie.Year}</p>
          <div className={styles.buttons}>
            <button title="Add to wishlsit">
              <MdBookmarkAdded />
            </button>
            <button title="Movie Details">
              <FaInfo />
            </button>
            <button title="Rate Movie">
              <GoStarFill />
            </button>
            <button title="hit Like">
              <Badge className="fs-6">
                5 <FcLike />
              </Badge>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
