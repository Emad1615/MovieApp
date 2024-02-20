const BASE_API = ' http://localhost:80/movies';
export async function getWatchedMovies() {
  const res = await fetch(BASE_API);
  const data = await res.json();
  return data;
}
export async function addToWishList(movie) {
  try {
    const res = await fetch(`${BASE_API}`, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error('An error occured during  adding movie to watched list');
  }
}
