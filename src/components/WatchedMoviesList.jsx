import MovieItem from './MovieItem';

function watchedMoviesList({ watchedList, setWatchedList, setSelectedID }) {
  return (
    <div className="px-2 py-3">
      <h1 className="w-3/4 border-b border-b-slate-800 py-2 text-xl font-semibold uppercase tracking-widest text-slate-500">
        watched Movies
      </h1>
      <ul className="px-0 py-2">
        {watchedList.map((movie, idx) => (
          <MovieItem key={idx} movie={movie} setSelectedID={setSelectedID} />
        ))}
      </ul>
    </div>
  );
}

export default watchedMoviesList;
