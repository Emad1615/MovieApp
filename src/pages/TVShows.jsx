import CardsList from "../components/CardsList";
import FlickingSilder from "../components/FlickingSilder";
import Navbar from "../components/Navbar";
import styles from "./TVShows.module.css";

function TVShows() {
  return (
    <div>
      <Navbar />
      <section className={styles.sliderContainer}>
        <FlickingSilder />
      </section>
      <CardsList title={"TV Shows"} query={"vikings"} />
    </div>
  );
}

export default TVShows;
