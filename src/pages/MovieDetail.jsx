import { useParams } from "react-router-dom";
import RelatedMediaList from "@/components/MediaDetails/RelatedMediaList";
import ActorList from "@/components/MediaDetails/ActorList";
import Banner from "@/components/MediaDetails/Banner";
import Information from "@/components/MediaDetails/Information";
import useFetch from "@/hooks/useFetch";
import { groupBy } from "lodash";

function MovieDetail() {
  const { id } = useParams();

  const { data: movieDetail, isLoading: isLoadingMovieDetail } = useFetch({
    url: `/movie/${id}?append_to_response=credits,videos`,
  });

  

  const { data: relatedMediaListResult, isLoading: isRelatedLoading } =
    useFetch({
      url: `/movie/${id}/recommendations`,
    });

  const relatedMediaList = (relatedMediaListResult.results || []).slice(0, 12);

  const cast = movieDetail.credits?.cast;
 const crews = (movieDetail.credits?.crew || []).filter((crew) =>
    ["Director", "Screenplay", "Writer", "Driver"].includes(crew.job),
  );
  const jobGroup = groupBy(crews, "job"); 

  const traillerVideoKey = movieDetail.videos?.results.find(i => i.type === 'Trailer').key

  return (
    <div className="">
      <Banner
        credits={movieDetail.credits}
        backdropPath={movieDetail.backdrop_path}
        posterPath={movieDetail.poster_path}
        originalTitle={movieDetail.original_title}
        releaseDate={movieDetail.release_date}
        genres={movieDetail.genres}
        voteAverage={movieDetail.vote_average}
        overview={movieDetail.overview}
        isLoading={isLoadingMovieDetail}
        jobGroup={jobGroup}
        traillerVideoKey={traillerVideoKey}
      />
      <div className="w-full bg-black p-8 text-white">
        <div className="container-app">
          <div className="flex flex-2 flex-col gap-4">
            <ActorList cast={cast || []} isLoading={isRelatedLoading} />
            <RelatedMediaList title={'More like this'} data={relatedMediaList} />
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
