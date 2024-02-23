function WatchedSummery({ watchedList }) {
  const NumberOfMovies = watchedList.length;
  const durationOfAllWatchedMovie = watchedList.reduce(
    (sum, movies) =>
      sum +
      Number(
        movies.Runtime.split(' ').slice(0, 1).join('') !== 'N/A'
          ? movies.Runtime.split(' ').slice(0, 1).join('')
          : 0,
      ),
    0,
  );
  const aveargeOfDuration = durationOfAllWatchedMovie / NumberOfMovies;
  const averageImdbRating =
    watchedList.reduce((sum, movies) => sum + Number(movies.imdbRating), 0) /
    watchedList.length;
  const averageUserRating =
    watchedList.reduce((sum, movies) => sum + Number(movies.rate), 0) /
    watchedList.length;
  return (
    <div className="rounded bg-slate-800 px-4 py-3">
      <h3 className="my-3 border-b border-b-slate-900 pb-3 text-xl font-semibold uppercase text-slate-400">
        Watched Summery
      </h3>
      <div className="grid grid-cols-3 gap-4">
        <span className="">
          🎬 {NumberOfMovies}{' '}
          <small className=" tracking-widest text-slate-500">
            &nbsp;movies/series
          </small>
        </span>
        <span>⭐ {averageImdbRating.toFixed(1)}</span>
        <span>🌟 {averageUserRating.toFixed(1)}</span>
        <span>⏳ {durationOfAllWatchedMovie.toFixed(0)} min</span>
        <span>⌚ {aveargeOfDuration.toFixed(0)} min</span>
      </div>
    </div>
  );
}

export default WatchedSummery;
