import Navbar from '../components/Navbar';
import styles from './HomePage.module.css';
import { useMediaQuery } from 'react-responsive';
import { TiWorld } from 'react-icons/ti';
import { FaList } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

function HomePage() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <section>
        <h1>🍿</h1>
        <blockquote className={`${!isMobile ? styles.blockquote : null}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </blockquote>
        <div>
          <Link
            className={`${isMobile ? styles.btnMobile : styles.btnDesk}`}
            to={'/movies'}
          >
            <TiWorld className="inline-block" /> &nbsp; Browse
          </Link>
          <Link
            className={`${isMobile ? styles.btnMobile : styles.btnDesk}`}
            to={'/app'}
          >
            <FaList className="inline-block" />
            &nbsp; Your WishList
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
