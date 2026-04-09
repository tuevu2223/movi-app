import "./App.css";
import Header from "./components/Header";
import FeatureMovies from "./components/FeatureMovies";
import MediaList from "./components/MediaList";
import { TRENDING_TABS } from "./libs/constant";

function App() {
  return (
    <div className="">
      <Header />
      <FeatureMovies />
      <MediaList title={'Trending'} tabs={TRENDING_TABS} />
    </div>
  );
}

export default App;
