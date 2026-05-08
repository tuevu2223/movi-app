function RatingInput({ name, onChange }) {
  return (
    <select className="" name={name} onChange={onChange}>
      <option className="text-black">All</option>
      <option className="text-black">0 - 49</option>
      <option className="text-black">50 - 69</option>
      <option className="text-black">70 - 100</option>
    </select>
  );
}
export default RatingInput;
