import { useParams } from "react-router-dom";
import RelatedMediaList from "@/components/MediaDetails/RelatedMediaList";
import ActorList from "@/components/MediaDetails/ActorList";
import Banner from "@/components/MediaDetails/Banner";
import Information from "@/components/MediaDetails/Information";
import useFetch from "@/hooks/useFetch";

function MovieDetail() {
  const { id } = useParams();

  const { data: movieDetail, isLoading: isLoadingMovieDetail } = useFetch({
    url: `/movie/${id}?append_to_response=credits`,
  });

  const { data: relatedMediaListResult, isLoading: isRelatedLoading } =
    useFetch({
      url: `/movie/${id}/recommendations`,
    });

  const relatedMediaList = (relatedMediaListResult.results || []).slice(0, 12);

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
