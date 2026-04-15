import { useEffect, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";

function FeatureMovies() {
  const [movies, setMovies] = useState([]);
  const [movieIdActive, setMovieIdActive] = useState();
  // const [idLocation, setIdLocation] = useState(0);
  // const movieIdActive = movies?.[idLocation]?.id;

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    }).then(async (res) => {
      const data = await res.json();
      const populorMovies = data?.results.slice(0, 4);
      setMovies(populorMovies);
      setMovieIdActive(populorMovies?.[0].id);
    });
  }, []);

  // useEffect(() => {
  //   if (movies.length === 0) return;

  //   const timer = setInterval(() => {
  //     setIdLocation((prevIndex) => {
  //       const nextIndex = (prevIndex + 1) % movies.length;
  //       return nextIndex;
  //     });
  //   }, 2000);

  //   return () => clearInterval(timer);
  // }, [movies]);

  return (
    <div className="relative text-[1.5vw] text-white">
      {movies
        .filter((i) => i.id === movieIdActive)
        .map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      <PaginateIndicator
        movies={movies}
        movieIdActive={movieIdActive}
        setMovieIdActive={setMovieIdActive}
      />
    </div>
  );
}
export default FeatureMovies;
