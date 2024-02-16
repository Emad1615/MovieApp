function MovieItem({ movie, setSelectedID }) {
  const { Poster, Title, Type, Year, imdbID } = movie;
  return (
    <li
      onClick={() =>
        setSelectedID((selectedID) => (selectedID === imdbID ? null : imdbID))
      }
      className="flex flex-row gap-2 p-2 bg-gray-900 mb-2 rounded-md mr-5 hover:bg-violet-700 cursor-pointer"
    >
      <img src={Poster} alt={Title} className="flex-none w-20 h-24 rounded" />
      <div className="flex flex-col justify-center w-full pr-4">
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
