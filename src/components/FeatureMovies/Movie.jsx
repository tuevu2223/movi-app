import { useModelTraillerContext } from "@/context/TraillerModelProvider";
import useFetch from "@/hooks/useFetch";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useEffect } from "react";
import { Link } from "react-router-dom";

const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const FALLBACK_BACKDROP_URL = "https://placehold.co/1280x720?text=No+Image";

function Movie({ movie }) {
  const { setShowModel, setKeyLink } = useModelTraillerContext();
  const { data } = useFetch({ url: `/movie/${movie.id}/videos` });

  const traillerVideoKey = data.results?.find((i) => i.type === "Trailer").key;

  useEffect(() => {
    setKeyLink(traillerVideoKey);
  }, [traillerVideoKey]);

  if (!movie) {
    return null;
  } 

  const { backdrop_path, id, overview, release_date, title } = movie;
  const backdropUrl = backdrop_path
    ? `${TMDB_IMAGE_BASE_URL}${backdrop_path}`
    : FALLBACK_BACKDROP_URL;
  const detailUrl = `/movie/${id}`;
  const movieTitle = title || "Untitled";

  return (
    <article className="relative">
      <img
        className="aspect-video w-full object-cover brightness-50"
        src={backdropUrl}
        alt={movieTitle}
      />
      <div className="absolute bottom-[10%] left-8 flex w-1/2 flex-col gap-4 sm:w-1/3">
        <h2 className="text-[2.5vw] font-bold">{movieTitle}</h2>
        <div>
          <p className="inline-block rounded-sm border-1 border-white/60 p-1 text-white/60">
            PG-13
          </p>{" "}
          <br />
          <small>{release_date}</small>
        </div>
        <div className="hidden sm:block">
          <p className="text-[2vw] font-bold">Tổng quan</p>
          <p>{overview}</p>
        </div>
        <div>
          <button
            onClick={() => {
              setShowModel(true);
            }}
            className="mr-2 cursor-pointer rounded-lg bg-white px-5 py-3 text-black"
          >
            <FontAwesomeIcon icon={faPlay} />
            <span className="ml-2">Trailer</span>
          </button>
          <Link
            className="inline-block rounded-lg bg-white/30 px-5 py-3"
            to={detailUrl}
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </article>
  );
}

export default memo(Movie);
