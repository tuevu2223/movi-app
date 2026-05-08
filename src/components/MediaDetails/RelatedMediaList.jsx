import CardMovie from "@/components/CardMovie";

function RelatedMediaList({ data, title = "" }) {
  return (
    <div className="text-[1.2vw]">
      {title && <p className="mb-4 text-[2vw] font-bold">{title}</p>}
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {data?.map((i) => (
          <CardMovie
            key={i.id}
            id={i.id}
            date={i?.release_date || i?.first_air_date}
            pathImg={i.backdrop_path}
            point={i?.vote_average}
            title={i.title || i?.original_name}
            mediaType={i.media_type || (data.mediaType === "tv" && "tv")}
          />
        ))}
      </div>
    </div>
  );
}
export default RelatedMediaList;
