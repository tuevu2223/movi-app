import { useParams } from "react-router-dom";
import RelatedMediaList from "@/components/MediaDetails/RelatedMediaList";
import ActorList from "@/components/MediaDetails/ActorList";
import Banner from "@/components/MediaDetails/Banner";
import Information from "@/components/MediaDetails/Information";
import useFetch from "@/hooks/useFetch";

function TVShowDetail() {
  const { id } = useParams();

  const { data: tvDetail, isLoading: isLoadingTVDetail } = useFetch({
    url: `/tv/${id}?append_to_response=credits`,
  });

  const { data: relatedMediaListResult, isLoading: isRelatedLoading } =
    useFetch({
      url: `/tv/${id}/recommendations`,
    });

  const relatedMediaList = (relatedMediaListResult.results || []).slice(0, 12);

  const cast = tvDetail.credits?.cast;

  return (
    <div className="">
      <Banner
        credits={tvDetail.credits}
        backdropPath={tvDetail.backdrop_path}
        posterPath={tvDetail.poster_path}
        originalTitle={tvDetail.original_name}
        releaseDate={tvDetail.first_air_date}
        genres={tvDetail.genres}
        voteAverage={tvDetail.vote_average}
        overview={tvDetail.overview}
        isLoading={isLoadingTVDetail}
      />
      <div className="w-full bg-black p-8 text-white">
        <div className="m-auto flex max-w-7xl gap-4 lg:gap-8">
          <div className="flex flex-2 flex-col gap-4">
            <ActorList cast={cast || []} isLoading={isRelatedLoading} />
            <RelatedMediaList data={relatedMediaList} />
          </div>
          <Information
            originalName={tvDetail.original_title}
            originalCountry={tvDetail.origin_country}
            status={tvDetail.status}
            budget={tvDetail.budget}
            revenue={tvDetail.revenue}
          />
        </div>
      </div>
    </div>
  );
}
export default TVShowDetail;
