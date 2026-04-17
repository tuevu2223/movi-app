import CardMovie from "@/components/CardMovie";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";

function MediaList({ title, tabs }) {
  const [tabIdActive, setTabIdActive] = useState(tabs[0].id);

  const url = tabs.find((tab) => tab.id === tabIdActive).url;
  const { data: mediaListResult } = useFetch({ url });

  const mediaList = mediaListResult.results || [];

  return (
    <div className="flex flex-col gap-4 bg-black px-8 py-12 text-[1.2vw] text-white">
      <div className="flex gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex rounded border border-white">
          {tabs.map((i) => (
            <li
              key={i.id}
              onClick={() => {
                setTabIdActive(i.id);
              }}
              className={`flex cursor-pointer items-center rounded px-4 ${i.id === tabIdActive && "bg-white text-black"}`}
            >
              {i.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {mediaList.map((i) => (
          <CardMovie
            key={i.id}
            id={i.id}
            date={i?.release_date || i?.first_air_date}
            pathImg={i.backdrop_path}
            point={i?.vote_average}
            title={i.title || i?.original_name}
            mediaType={i.media_type || (tabIdActive === "tv" && "tv")}
          />
        ))}
      </div>
    </div>
  );
}
export default MediaList;
