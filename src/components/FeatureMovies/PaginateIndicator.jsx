function PaginateIndicator({
  movies,
  movieIdActive,
  // setMovieIdActive,
}) {
  
  return (
    <div className="absolute right-8 bottom-[10%]">
      <ul className="flex gap-1">
        {movies.map((movie) => (
          <li
            key={movie.id}
            // onClick={() => {
            //   setMovieIdActive(movie.id);
            // }}
            className={`h-1 w-8 cursor-pointer ${movie.id === movieIdActive ? "bg-white" : "bg-white/70"}`}
          ></li>
        ))}
      </ul>
    </div>
  );
}
export default PaginateIndicator;
