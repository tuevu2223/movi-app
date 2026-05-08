import RelatedMediaList from "@/components/MediaDetails/RelatedMediaList";
import SearchForm from "@/components/SearchForm/SearchForm";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";

function SearchPage() {
  const [searchFormValue, setSearchFormValue] = useState({
    mediaType: "movie",
    genresType: [],
    rating: "All",
  });

  const [min, max] =
    searchFormValue.rating === "All"
      ? [0, 100]
      : searchFormValue.rating.split(" - ");

  const {
    data: { results },
  } = useFetch({
    url: `/discover/${searchFormValue.mediaType}?with_genres=${searchFormValue.genresType.join(",")}&vote_average.gte=${min / 10}&vote_average.lte=${max / 10}`,
  });


  return (
    <div className="bg-black p-8 text-white">
      <div className="container-app">
        <SearchForm setSearchFormValue={setSearchFormValue}></SearchForm>
        <div className="flex-2">
          <RelatedMediaList data={results} />
        </div>
      </div>
    </div>
  );
}
export default SearchPage;
