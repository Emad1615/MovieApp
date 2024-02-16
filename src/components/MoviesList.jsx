import MovieItem from './MovieItem';

function MoviesList({ poster, setSelectedID }) {
  return (
    <ul className="mt-4 h-auto " style={{ height: '50rem' }}>
      {poster.map((movie, idx) => (
        <MovieItem key={idx} movie={movie} setSelectedID={setSelectedID} />
      ))}
    </ul>
  );
}

export default MoviesList;
