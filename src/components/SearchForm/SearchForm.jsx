import FormField from "@/components/SearchForm/FormField";
import GenresInput from "@/components/SearchForm/GenresInput";
import RatingInput from "@/components/SearchForm/RatingInput";
import SearchInputType from "@/components/SearchForm/SearchInputType";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

function SearchForm({ setSearchFormValue }) {
  const [searchParams] = useSearchParams();
  const mediaType = searchParams.get("mediaType");

  const { control, watch } = useForm({
    defaultValues: {
      mediaType: `${mediaType === "tv" ? "tv" : "movie"}`,
      genresType: [],
      rating: "All",
    },
  });

  const formValue = watch();

  useEffect(() => {
    setSearchFormValue(formValue);
  }, [JSON.stringify(formValue)]);

  return (
    <form className="flex-1 flex-col">
      <div className="rounded border p-4 shadow-md">
        <div className="flex flex-col gap-3">
          <FormField
            name="mediaType"
            label="Media Type"
            control={control}
            Component={SearchInputType}
          />
          <FormField
            name="genresType"
            label="Genres"
            control={control}
            Component={GenresInput}
          />
          <FormField
            name="rating"
            label="Rating"
            control={control}
            Component={RatingInput}
          />
        </div>
      </div>
    </form>
  );
}
export default SearchForm;
