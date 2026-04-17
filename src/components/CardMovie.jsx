import CircularProgressBar from "@/components/CircularProgressBar";
import ImageBlur from "@/components/ImageBlur";
import { Link } from "react-router-dom";

function CardMovie({ pathImg, point, title, date, mediaType, id }) {
  return (
    <Link
      className="relative overflow-hidden rounded-lg border"
      to={`/movie/${id}`}
    >
      <div>
        <ImageBlur src={`https://image.tmdb.org/t/p/w500${pathImg}`} width={166} height={93} />
        {/* <img src={`https://image.tmdb.org/t/p/w500${pathImg}`} /> */}
        {mediaType === "tv" && (
          <div className="absolute top-1 right-1 rounded bg-black p-1 font-bold shadow-2xl">
            TV Show
          </div>
        )}

        <div className="relative -top-[2.5vw] px-4 py-2">
          <CircularProgressBar percent={Math.round((point ?? 0) * 10)} />
          <p className="font-bold">{title}</p>
          <small>{date}</small>
        </div>
      </div>
    </Link>
  );
}
export default CardMovie;
