import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedMediaList from "@/components/MediaDetails/RelatedMediaList";
import ActorList from "@/components/MediaDetails/ActorList";
import Banner from "@/components/MediaDetails/Banner";
import Information from "@/components/MediaDetails/Information";

function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState({});
  const [relatedMediaList, setRelatedMediaList] = useState([]);
  const [isLoadingMovieDetail, setIsLoadingMovieDetail] = useState(false);
  const [isRelatedLoading, setIsRelatedLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoadingMovieDetail(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
      },
    )
      .then(async (res) => {
        const data = await res.json();
        setMovieDetail(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoadingMovieDetail(false);
      });
  }, [id]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsRelatedLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        console.log({ data });
        setRelatedMediaList(data.results.slice(0, 12));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsRelatedLoading(false);
      });
  }, [id]);

  const cast = movieDetail.credits?.cast;

  return (
    <div className="">
      <Banner movieDetail={movieDetail} isLoading={isLoadingMovieDetail} />
      <div className="w-full bg-black p-8 text-white">
        <div className="m-auto flex max-w-7xl gap-4 lg:gap-8">
          <div className="flex flex-2 flex-col gap-4">
            <ActorList cast={cast || []} isLoading={isRelatedLoading} />
            <RelatedMediaList data={relatedMediaList} />
          </div>
          <Information
            originalName={movieDetail.original_title}
            originalCountry={movieDetail.origin_country}
            status={movieDetail.status}
            budget={movieDetail.budget}
            revenue={movieDetail.revenue}
          />
        </div>
      </div>
    </div>
  );
}
export default MovieDetail;
