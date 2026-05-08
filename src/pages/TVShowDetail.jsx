import { useParams } from "react-router-dom";
import RelatedMediaList from "@/components/MediaDetails/RelatedMediaList";
import ActorList from "@/components/MediaDetails/ActorList";
import Banner from "@/components/MediaDetails/Banner";
import Information from "@/components/MediaDetails/Information";
import useFetch from "@/hooks/useFetch";
import TVInformation from "@/components/MediaDetails/TVInformation";
import SeasonsList from "@/components/MediaDetails/SeasonsList";

function TVShowDetail() {
  const { id } = useParams();

  const { data: tvDetail, isLoading: isLoadingTVDetail } = useFetch({
    url: `/tv/${id}?append_to_response=aggregate_credits,credits,videos`,
  });

  const { data: relatedMediaListResult, isLoading: isRelatedLoading } =
    useFetch({
      url: `/tv/${id}/recommendations`,
    });

  const relatedMediaList = (relatedMediaListResult.results || []).slice(0, 12);

  const cast = tvDetail.credits?.cast;

  const targetJobs = ["Director", "Writer"];
  const jobGroup =
    tvDetail.aggregate_credits?.crew.reduce((acc, person) => {
      const { id, name, jobs } = person;

      for (const item of jobs) {
        if (targetJobs.includes(item.job)) {
          acc[item.job] = acc[item.job] || [];

          acc[item.job].push({ id, name, job: item.job });
        }
      }
      return acc;
    }, {}) || {};

  const traillerVideoKey = tvDetail.videos?.results.find(
    (i) => i.type === "Trailer",
  ).key;

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
        jobGroup={jobGroup || {}}
        traillerVideoKey={traillerVideoKey}
      />
      <div className="w-full bg-black p-8 text-white">
        <div className="container-app">
          <div className="flex flex-2 flex-col gap-4">
            <ActorList cast={cast || []} isLoading={isRelatedLoading} />
            <SeasonsList seasons={tvDetail.seasons} />
            <RelatedMediaList
              title={"More like this"}
              data={relatedMediaList}
            />
          </div>
          <TVInformation
            originalName={tvDetail.name}
            originalCountry={tvDetail.origin_country}
            status={tvDetail.status}
            budget={tvDetail.budget}
            revenue={tvDetail.revenue}
            networks={tvDetail.networks}
          />
        </div>
      </div>
    </div>
  );
}
export default TVShowDetail;
