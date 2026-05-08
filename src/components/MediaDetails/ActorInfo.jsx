import ImageBlur from "@/components/ImageBlur";
import { Link } from "react-router-dom";

function ActorInfo({ profilePath, name, character, id }) {
  console.log({ name });

  return (
    <Link to={`/people/${id}`}>
      <div className="overflow-hidden rounded-sm border shadow">
        <ImageBlur
          className="w-full"
          width={104}
          height={155}
          src={
            profilePath
              ? `https://image.tmdb.org/t/p/original/${profilePath}`
              : "/ActorNoImage.svg"
          }
        />
        <div className="p-2">
          <p className="font-bold">{name}</p>
          <p> {character}</p>
          {/* <p>18</p> */}
        </div>
      </div>
    </Link>
  );
}
export default ActorInfo;
