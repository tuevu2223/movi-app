import { useState } from "react";
import ActorInfo from "./ActorInfo";

function ActorList({ cast, isLoading }) {
  const [isShowMore, setIsShowMore] = useState(false);

  const currentCast = isShowMore ? cast.slice(0, 32) : cast.slice(0, 4);
  if (isLoading) {
    return (
      <div className="background-black flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-black border-t-transparent"></div>
      </div>
    );
  }
  return (
    <div className="text-[1.2vw]">
      <p className="mb-4 text-[2vw] font-bold">Actors</p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {currentCast.map((i) => (
          <ActorInfo
            key={i.id}
            profilePath={i.profile_path}
            name={i.name}
            character={i.character}
          />
        ))}
      </div>
      <p
        className="cursor-pointer py-1"
        onClick={() => {
          setIsShowMore(!isShowMore);
        }}
      >
        {isShowMore ? "Show less" : "Show more"}
      </p>
    </div>
  );
}
export default ActorList;
