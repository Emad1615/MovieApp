import { Badge } from 'react-bootstrap';
import { useMovieDetails } from '../hooks/useMovieDetails';
import Loader from './Loader';
import { useKey } from '../hooks/useKey';
import StarRating from './StarRating';
import { useEffect, useRef, useState } from 'react';

function MovieDetails({ selectedId, setSelectedID }) {
  const { movie, isLoading, error } = useMovieDetails(selectedId);
  const [rate, setRate] = useState(null);
  const numberOfRate = useRef(0);
  const {
    Actors,
    Awards,
    BoxOffice,
    Country,
    DVD,
    Director,
    Genre,
    Language,
    Metascore,
    Plot,
    Poster,
    Production,
    Rated,
    Ratings,
    Released,
    Response,
    Runtime,
    Title,
    Type,
    Website,
    Writer,
    Year,
    imdbID,
    imdbRating,
    imdbVotes,
  } = movie;
  const isWatched = false;
  useKey('Escape', () => {
    setSelectedID(null);
  });
  useEffect(() => {
    numberOfRate.current += 1;
  }, [rate]);
  return (
    <>
      {isLoading && <Loader />}
      {error && <p className="text-center font-light">{error}</p>}
      {!isLoading && !error && (
        <>
          <div className="relative">
            <button
              onClick={() => setSelectedID(null)}
              className="absolute left-1 top-1 rounded-xl bg-slate-200 p-1 text-2xl hover:bg-slate-400"
            >
              🔙
            </button>
            <div className="flex flex-row gap-3 rounded-md bg-slate-800">
              <div className="flex-none">
                <img
                  src={Poster}
                  alt={Title}
                  className="h-80 w-52 rounded-md"
                />
              </div>
              <div className="flex-grow-1  flex  flex-col justify-center">
                <h4 className="font-semibold">{Title}</h4>
                <p>
                  <span>{Released}</span> 🟣 <span>{Runtime}</span>
                </p>
                <p>Language | {Language}</p>
                <p>{Genre}</p>
                <p>
                  🎥 {Type} | 📆 {Year}
                </p>
                <p>⭐ {imdbRating} IMDb rating</p>
                <p>Votes - {imdbVotes} IMDb votes</p>
              </div>
            </div>
          </div>

          <section className="grid-row-[auto_auto] my-5 grid gap-5 ">
            <div className="m-auto w-10/12 rounded-md bg-slate-800 p-1 ">
              {isWatched ? (
                <p className="m-0 p-2 text-center font-semibold">
                  You rated with movie %X% ⭐️
                </p>
              ) : (
                <>
                  <StarRating onSetRate={setRate} />
                  {rate && (
                    <div className="text-center">
                      <button className="my-2 rounded bg-indigo-700 px-4  py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-300 ease-out hover:scale-110 hover:bg-indigo-900  ">
                        Add to wishlist
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="mx-16">
              <p className="text-justify font-extralight italic">{Plot}</p>
              <h6>Actors</h6>
              <blockquote className="border-l-4 border-l-slate-800 p-2">
                {Actors}
              </blockquote>
              <h6>Awards / BoxOffice</h6>
              <blockquote className="border-l-4 border-l-slate-800 p-2">
                {Awards} 🟣 {BoxOffice}
              </blockquote>
              <h6>Ratings</h6>
              <ol className="list-disc">
                {Ratings?.map((rate, idx) => (
                  <li key={idx}>
                    {rate.Source}
                    <Badge className="ml-5">{rate.Value}</Badge>
                  </li>
                ))}
              </ol>
              <div className="mt-5 flex flex-row justify-between">
                <p className="underline">Directed by {Director}</p>
                <p className="underline">Writer {Writer}</p>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default MovieDetails;
