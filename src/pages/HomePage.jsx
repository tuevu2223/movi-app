import FeatureMovies from "../components/FeatureMovies";
import MediaList from "../components/MediaList";
import { TOP_RATED_TABS, TRENDING_TABS } from "../libs/constant";

function HomePage() {
  return (
    <div className="">
      <FeatureMovies />
      <MediaList title={"Trending"} tabs={TRENDING_TABS} />
      <MediaList title={"Top rated"} tabs={TOP_RATED_TABS} />
    </div>
  );
}

export default HomePage;
