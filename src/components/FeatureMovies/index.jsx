import { useEffect, useMemo, useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
import useFetch from "@/hooks/useFetch";

function FeatureMovies() {
  const [selectId, setSelectId] = useState();
  const [rotationSeed, setRotationSeed] = useState(0);

  const { data: moviesResult } = useFetch({ url: "/movie/popular" });

  const movies = useMemo(() => (moviesResult.results || []).slice(0, 4), [moviesResult.results]);

  const movieIdActive = selectId || movies[0]?.id;

  const handleMovieSelect = (movieId) => {
    setSelectId(movieId);
    setRotationSeed((seed) => seed + 1);
  };

  useEffect(() => {
    if (movies.length <= 1) {
      return;
    }

    const intervalId = setInterval(() => {
      setSelectId((currentMovieId) => {
        if (!currentMovieId) {
          return movies[1]?.id ?? movies[0]?.id;
        }

        const currentIndex = movies.findIndex((movie) => movie.id === currentMovieId);
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % movies.length;

        return movies[nextIndex]?.id;
      });
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [movies, rotationSeed]);

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
        setMovieIdActive={handleMovieSelect}
      />
    </div>
  );
}
export default FeatureMovies;
