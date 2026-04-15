import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { groupBy } from "lodash";
import CircularProgressBar from "../CircularProgressBar";

function Banner({ movieDetail, isLoading }) {
  const crews = (movieDetail.credits?.crew || []).filter((crew) =>
    ["Director", "Screenplay", "Writer", "Driver"].includes(crew.job),
  );

  const jobGroup = groupBy(crews, "job");

  if (isLoading) {
    return (
      <div className="background-black flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-black border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden text-[1.2vw] text-white">
      <div className="absolute inset-0 brightness-40">
        <img
          className="aspect-video w-full"
          src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="relative m-auto flex max-w-7xl gap-4 p-8">
        <div className="flex-1">
          <img
            className="w-full"
            src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
            alt=""
          />
        </div>
        <div className="flex flex-2 flex-col gap-2 lg:gap-4">
          <p className="text-[2vw] font-bold">{movieDetail.original_title}</p>
          <div className="flex items-center gap-2">
            <span className="">{movieDetail.release_date}</span>
            <span>
              {(movieDetail.genres || []).map((i) => i.name).join(", ")}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round((movieDetail.vote_average || 0) * 10)}
              />
              <span>Rating</span>
            </div>
            <button className="cursor-pointer">
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
          </div>
          <div className="">
            <p className="font-bold">Overview</p>
            <p>{movieDetail.overview}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {Object.keys(jobGroup).map((jobName) => (
              <div key={jobName} className="">
                <p className="font-bold">{jobName}</p>
                <p>{jobGroup[jobName].map((job) => job.name).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
