import { currencyFormatter } from "@/libs/currencyFormatter";

function Information({
  originalName,
  originalCountry,
  status,
  budget,
  revenue,
}) {
  return (
    <div className="flex-1 text-[1.2vw]">
      <p className="mb-4 text-[2vw] font-bold">Information</p>

      <div className="flex flex-col gap-3 lg:gap-5">
        <div className="">
          <p className="font-bold">Original Name</p>
          <p>{originalName}</p>
        </div>
        <div className="">
          <p className="font-bold">Original Country</p>
          <div className="w-[2vw]">
            {(originalCountry || []).map((i) => (
              <img
                key={i}
                className="mt-1 mr-1"
                src={`https://flagcdn.com/48x36/${i.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/96x72/${i.toLowerCase()}.png 2x,https://flagcdn.com/144x108/${i.toLowerCase()}.png 3x`}
                width="48"
                height="36"
                alt="Ukraine"
              ></img>
            ))}
          </div>
        </div>
        <div className="">
          <p className="font-bold">Status</p>
          <p>{status}</p>
        </div>
        <div className="">
          <p className="font-bold">Budget</p>
          <p>{currencyFormatter(budget)}</p>
        </div>
        <div className="">
          <p className="font-bold">Revenue</p>
          <p>{currencyFormatter(revenue)}</p>
        </div>
      </div>
    </div>
  );
}
export default Information;
