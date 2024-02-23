import AppNav from '../components/AppNav';
import Box from '../components/Box';
import Loader from '../components/Loader';
import MovieDetails from '../components/MovieDetails';
import MoviesList from '../components/MoviesList';
import SearchBox from '../components/SearchBox';
import WatchedSummery from '../components/WatchedSummery';
import WatchedMoviesList from './../components/WatchedMoviesList';
import styles from './AppLayout.module.css';
function AppLayout({
  query,
  setQuery,
  poster,
  isLoading,
  error,
  selectedId,
  setSelectedID,
  watchedList,
  setWatchedList,
}) {
  return (
    <div>
      <AppNav />
      <SearchBox query={query} setQuery={setQuery} />
      <div className={`container ${styles.appContainer}`}>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MoviesList poster={poster} setSelectedID={setSelectedID} />
          )}
          {error && query && (
            <p className="text-center text-yellow-600">{error}</p>
          )}
          {!query && (
            <p className="text-center uppercase text-stone-400">
              make dive in search box by typing movie name
            </p>
          )}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              key={selectedId}
              selectedId={selectedId}
              setSelectedID={setSelectedID}
              watchedList={watchedList}
              setWatchedList={setWatchedList}
            />
          ) : (
            <>
              <WatchedSummery watchedList={watchedList} />
              <WatchedMoviesList
                watchedList={watchedList}
                setWatchedList={setWatchedList}
                setSelectedID={setSelectedID}
              />
            </>
          )}
        </Box>
      </div>
    </div>
  );
}

export default AppLayout;
