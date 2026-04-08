import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Movie({ movie }) {
  const { backdrop_path, title, overview, release_date } = movie;
  return (
    <>
      <img
        className="aspect-video brightness-50"
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=""
      />
      <div className="absolute bottom-[10%] left-8 flex w-1/2 flex-col gap-4 sm:w-1/3">
        <p className="text-[2.5vw] font-bold">{title}</p>
        <div className="">
          <p className="inline-block rounded-sm border-1 border-white/60 p-1 text-white/60">
            PG13
          </p>{" "}
          <br />
          <small>{release_date}</small>
        </div>
        <div className="hidden sm:block">
          <p className="text-[2vw] font-bold">Tổng quan</p>
          <p className="">{overview}</p>
        </div>
        <div className="">
          <button className="mr-2 cursor-pointer rounded-lg bg-white px-5 py-3 text-black">
            <FontAwesomeIcon icon={faPlay} />
            Traller
          </button>
          <button className="cursor-pointer rounded-lg bg-white/30 px-5 py-3">
            Xem chi tiết
          </button>
        </div>
      </div>
    </>
  );
}
export default Movie;
