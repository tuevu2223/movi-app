import ImageBlur from "@/components/ImageBlur";
import RelatedMediaList from "@/components/MediaDetails/RelatedMediaList";
import { GENDER_MAP } from "@/libs/constant";
import { useLoaderData } from "react-router-dom";



function PeoplePage() {
  const data = useLoaderData();

  console.log({ data });

  return (
    <div className="w-full bg-black text-white">
      <div className="container-app flex gap-8  p-8">
        <div className="flex-1">
          <ImageBlur
            src={`https://image.tmdb.org/t/p/original/${data.profile_path}`}
            alt=""
            width={230}
            height={345}
            className={"w-full min-w-[150px]"}
          />

          <div className="mt-4 flex flex-col gap-4">
            <div className="">
              <p className="font-bold">Personal Info</p>
            </div>
            <div className="">
              <p className="font-bold">Known For</p>
              <p>{data.known_for_department}</p>
            </div>
            <div className="">
              <p className="font-bold">Gender</p>
              <p>{GENDER_MAP[data.gender]}</p>
            </div>
            <div className="">
              <p className="font-bold">Place of Birth</p>
              <p>{data.place_of_birth}</p>
            </div>
            <div className="">
              <p className="font-bold">Birthday</p>
              <p>{data.birthday}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-2 flex-col gap-4">
          <div className="">
            <p className="font-bold">Blography</p>
            <p className="whitespace-pre-line">{data.biography}</p>
          </div>
          <RelatedMediaList
            title={"Known for"}
            data={data.combined_credits.cast}
          />
        </div>
      </div>
    </div>
  );
}
export default PeoplePage;
