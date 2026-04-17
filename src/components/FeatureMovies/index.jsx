import { useState } from "react";
import Movie from "./Movie";
import PaginateIndicator from "./PaginateIndicator";
import useFetch from "@/hooks/useFetch";

function FeatureMovies() {
  const [selectId, setSelectId] = useState();

  const { data: moviesResult } = useFetch({ url: "/movie/popular" });

  const movies = (moviesResult.results || []).slice(0, 4);

  const movieIdActive = selectId || movies[0]?.id;

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
        setMovieIdActive={setSelectId}
      />
    </div>
  );
}
export default FeatureMovies;
