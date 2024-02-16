import Navbar from '../components/Navbar';
import ReactCardCarousel from 'react-card-carousel';
import styles from './MoviesPage.module.css';
import usePosters from '../hooks/usePosters';
import CardsList from '../components/CardsList';

function MoviesPage() {
  const { poster, isLoading, error } = usePosters('troll');
  return (
    <div>
      <Navbar />
      <section className={styles.cardslider}>
        <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
          {poster?.map((poster, i) => (
            <div className={styles.card} key={i}>
              <img src={poster.Poster} alt={poster.Title} />
            </div>
          ))}
        </ReactCardCarousel>
      </section>
      <CardsList title={'Movies'} query={'marvel'} />
      {/* <section className={`container ${styles.movieContainer}`}>
        <h1>Movies </h1>
      </section> */}
    </div>
  );
}

export default MoviesPage;
