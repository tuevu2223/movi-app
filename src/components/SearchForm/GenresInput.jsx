import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import { useWatch } from "react-hook-form";

function GenresInput({ control, onChange, value = [] }) {
  const mediaType = useWatch({ name: "mediaType", control: control });
  const {
    data: { genres },
  } = useFetch({ url: `/genre/${mediaType}/list` });
  console.log({ mediaType });

  useEffect(() => {
    onChange([]);
  }, [mediaType]);

  return (
    <div className="flex flex-wrap gap-2">
      {genres?.map((i) => (
        <span
          onClick={() => {
            let newValue = [...value];
            if (value.includes(i.id)) {
              newValue = newValue.filter((value) => value !== i.id);
            } else {
              newValue = [...newValue, i.id];
            }
            onChange(newValue);
          }}
          key={i.id}
          className={`cursor-pointer rounded border px-1 ${value.includes(i.id) ? "bg-white text-black" : ""}`}
        >
          {i.name}
        </span>
      ))}
    </div>
  );
}
export default GenresInput;
