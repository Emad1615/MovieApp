import { useEffect, useState } from "react";
const KEY = "f84fc31d";
function usePosters(query) {
  const BASE_API = `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`;
  const [poster, setPoster] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    async function loadPosters() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(BASE_API, { signal: controller.signal });
        if (!res.ok) throw Error("An error occured during fetch data");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setPoster(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadPosters();
    if (query.length < 3) {
      setPoster([]);
      setError("");
      return;
    }
    return () => controller.abort();
  }, [query, BASE_API]);
  return { poster, isLoading, error };
}

export default usePosters;
