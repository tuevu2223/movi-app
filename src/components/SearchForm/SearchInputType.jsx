function SearchInputType({ name, onChange, value }) {
  return (
    <div className="">
      <input
        type="radio"
        name={name}
        id="movie-search"
        onChange={onChange}
        value="movie"
        checked={value === "movie"}
      />
      <label htmlFor="movie-search">Movie</label>

      <br />

      <input
        type="radio"
        name={name}
        id="tv-search"
        onChange={onChange}
        value="tv"
        checked={value === "tv"}
      />
      <label htmlFor="tv-search">TV Show</label>
    </div>
  );
}
export default SearchInputType;
