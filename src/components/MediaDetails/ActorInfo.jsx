function ActorInfo({ profilePath, name, character }) {
  return (
    <div className="overflow-hidden rounded-sm border shadow">
      <img
        className="w-full"
        src={
          profilePath
            ? `https://image.tmdb.org/t/p/original/${profilePath}`
            : "/ActorNoImage.svg"
        }
        alt=""
      />
      <div className="p-2">
        <p className="font-bold">{name}</p>
        <p> {character}</p>
        {/* <p>18</p> */}
      </div>
    </div>
  );
}
export default ActorInfo;
