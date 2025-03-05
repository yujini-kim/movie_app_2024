import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzg2Mjc0N2UxMjljNjk2NWJhYmFiOTI5MTFkZjQ2NyIsIm5iZiI6MTc0MTA3MzA4MS45OTQsInN1YiI6IjY3YzZhYWI5MDExMWE4OGM2YjA0ZDdmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tRPgcXUulb_KvslJ5nBJ6xSCB8fvjC8Wf2NT0NTaBys`,
    },
  };

  const getMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=ko-US&page=1",
      options
    );
    const data = await res.json();
    setMovies(data.results);
  };

  const getGenres = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=ko",
      options
    );
    const data = await res.json();
    setGenres(data.genres);
  };

  const convertGenre = (genres, genreIds) => {
    return genreIds
      .map((id) => {
        const matchedGenre = genres.find((genre) => genre.id === id);
        return matchedGenre ? matchedGenre.name : "Unknown";
      })
      .join(", ");
  };

  useEffect(() => {
    getMovies();
    getGenres();
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {movies.map((movie) => (
            <Movie
              id={movie.id}
              title={movie.title}
              overview={movie.overview}
              genres={genres}
              genre_ids={movie.genre_ids}
              convertGenre={convertGenre(genres, movie.genre_ids)}
              poster_path={movie.poster_path}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
