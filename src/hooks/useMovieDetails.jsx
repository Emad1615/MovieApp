import { useEffect, useState } from 'react';

export function useMovieDetails(id) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(
    function () {
      async function getMovieDetails() {
        try {
          setIsLoading(true);
          setError('');
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=f84fc31d&i=${id}`,
          );
          if (!res.ok) throw new Error('An error occured during fetch data');
          const data = await res.json();
          if (data.Response === 'False') throw new Error('Movie not Found');
          setMovie(data);
          setError('');
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (id === null) {
        setMovie('');
        setError('');
        return;
      }
      getMovieDetails();
    },
    [id],
  );
  return { movie, isLoading, error };
}
