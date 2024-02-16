import usePosters from "../hooks/usePosters";
import Card from "./Card";
import styles from "./CardsList.module.css";
import Loader from "./Loader";
function CardsList({ title, query }) {
  const { poster, isLoading, error } = usePosters(query);
  if (isLoading) return <Loader />;
  if (error)
    return <p className="text-center text-danger fs-5 mt-5">{error} ....</p>;
  if (poster.length > 0)
    return (
      <section className={`container ${styles.movieContainer}`}>
        <h1>{title} </h1>
        <div className={styles.content}>
          {poster.map((poster) => (
            <Card movie={poster} key={poster.imdbID} />
          ))}
        </div>
      </section>
    );
}

export default CardsList;
