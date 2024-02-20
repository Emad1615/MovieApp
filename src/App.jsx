import { Suspense, lazy, useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import { Route, Routes } from 'react-router-dom';
import SpinnerFullPage from './components/SpinnerFullPage';
import ProtectedRoutes from './components/ProtectedRoutes';
import usePosters from './hooks/usePosters';
import { getWatchedMovies } from './services/apiMovie';
const HomePage = lazy(() => import('./pages/HomePage'));
const Movies = lazy(() => import('./pages/MoviesPage'));
const TVShows = lazy(() => import('./pages/TVShows'));
const Login = lazy(() => import('./pages/LoginPage'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

function App() {
  const [query, setQuery] = useState('');
  const { poster, isLoading, error } = usePosters(query);
  const [selectedId, setSelectedID] = useState(null);
  const [watchedList, setWatchedList] = useState([]);
  useEffect(() => {
    async function loadWatchedList() {
      setWatchedList(await getWatchedMovies());
    }
    loadWatchedList();
  }, []);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Sora', 'Monoton', 'sans-serif'],
      },
    });
  }, []);
  return (
    <>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tvshows" element={<TVShows />} />
          <Route path="login" element={<Login />} />
          <Route
            path="app"
            element={
              // <ProtectedRoutes>
              <AppLayout
                query={query}
                setQuery={setQuery}
                poster={poster}
                isLoading={isLoading}
                error={error}
                selectedId={selectedId}
                setSelectedID={setSelectedID}
                watchedList={watchedList}
                setWatchedList={setWatchedList}
              />
              // </ProtectedRoutes>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
