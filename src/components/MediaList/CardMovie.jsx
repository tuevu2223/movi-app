import CircularProgressBar from "./CircularProgressBar";

function CardMovie({ pathImg, point, title, date, mediaType }) {
  return (
    <div className="relative overflow-hidden rounded-lg border">
      <img src={`https://image.tmdb.org/t/p/w500${pathImg}`} />
      {mediaType === "tv" && (
        <div className="absolute top-1 right-1 rounded bg-black p-1 font-bold shadow-2xl">
          TV Show
        </div>
      )}

      <div className="relative -top-[2.5vw] px-4 py-2">
        <CircularProgressBar
          percent={Math.round(point * 10)}
          strokeColor={point > 7 ? "green" : point > 5 ? "yellow" : "red"}
        />
        <p className="font-bold">{title}</p>
        <small>{date}</small>
      </div>
    </div>
  );
}
export default CardMovie;
