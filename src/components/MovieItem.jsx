function MovieItem({ movie, setSelectedID }) {
  const { Poster, Title, Type, Year, imdbID } = movie;
  return (
    <li
      onClick={() =>
        setSelectedID((selectedID) => (selectedID === imdbID ? null : imdbID))
      }
      className="mb-2 mr-5 flex cursor-pointer flex-row gap-2 rounded-md bg-gray-900 p-2 hover:bg-violet-700"
    >
      <img src={Poster} alt={Title} className="h-24 w-20 flex-none rounded" />
      <div className="flex w-full flex-col justify-center pr-4">
        <h3>{Title}</h3>
        <div className="flex flex-row justify-between ">
          <span>📆 {Year}</span>
          <span>🎥 {Type}</span>
        </div>
      </div>
    </li>
  );
}

export default MovieItem;
