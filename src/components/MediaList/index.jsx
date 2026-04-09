import { useEffect, useState } from "react";
import CardMovie from "./CardMovie";

const TABS = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "movie",
    label: "Movie",
  },
  {
    id: "tv",
    label: "TV Show",
  },
];

function MediaList() {
  const [mediaList, setMediaList] = useState([]);
  const [tabIdActive, setTabIdActive] = useState(TABS[0].id);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/${tabIdActive}/day`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzQ3MTc2ZWUyYWI4Njc4ZWRlN2ZlMjBkZWQ5MmNkNCIsIm5iZiI6MTc2MDY5MTg1MC4yNzksInN1YiI6IjY4ZjIwNjhhNzVjOTExZWUxYjc3ZDk2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LtwJzSShEpGK3gzQPQSDXqCnNgqRVnt005AFpQ3fv6w",
      },
    }).then(async (res) => {
      const data = await res.json();
      const trendingMediaList = data?.results.slice(0, 12);
      setMediaList(trendingMediaList);
    });
  }, [tabIdActive]);

  console.log({ mediaList });

  return (
    <div className="flex flex-col gap-4 bg-black px-8 py-12 text-[1.2vw] text-white">
      <div className="flex gap-4">
        <p className="text-[2vw] font-bold">Trending</p>
        <ul className="flex rounded border border-white">
          {TABS.map((i) => (
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
            date={i?.release_date || i?.first_air_date}
            pathImg={i.backdrop_path}
            point={i?.vote_average}
            title={i.title || i?.original_name}
            mediaType={i.media_type}
          />
        ))}
      </div>
    </div>
  );
}
export default MediaList;
