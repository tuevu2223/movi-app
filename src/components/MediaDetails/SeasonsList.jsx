import CircularProgressBar from "@/components/CircularProgressBar";
import ImageBlur from "@/components/ImageBlur";
import { useState } from "react";

function SeasonsList({ seasons }) {
  const [showMore, setShowMore] = useState(false);
  const seasonsSetShowMore = showMore ? seasons : seasons?.slice(0, 3);

  return (
    <div>
      <p className="mb-4 text-[2vw] font-bold">Seasons</p>
      <div className="flex flex-col gap-4">
        {seasonsSetShowMore?.map((i) => (
          <div key={i.id} className="flex items-center gap-4 rounded-xl border p-4">
            <ImageBlur
              height={195}
              width={130}
              src={`https://image.tmdb.org/t/p/original/${i.poster_path}`}
              alt=""
            />
            <div className="">
              <p className="font-bold">Season</p>
              <span>Rating</span>
              <CircularProgressBar percent={i.vote_average * 10} />
              <div className="">
                <span>Release Date: {i.air_date}</span>
              </div>
              <p>{i.season_number} Epíodoes</p>
              <p>{i.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <span className="mt-2 inline-block cursor-pointer"
        onClick={() => {
            setShowMore(!showMore)
        }}
      >
        {showMore ? "Show Less" : "Show More"}
      </span>
    </div>
  );
}
export default SeasonsList;
