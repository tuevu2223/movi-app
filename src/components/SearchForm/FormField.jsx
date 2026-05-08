import { Controller } from "react-hook-form";

// eslint-disable-next-line no-unused-vars
function FormField({ control: formControl, label, name, Component }) {
  return (
    <div>
      <p className="mb-1 font-bold">{label}</p>
      <Controller
        name={name}
        control={formControl}
        render={({ field: { name, onChange, value } }) => {
          return <Component name={name} onChange={onChange} value={value} control={formControl} />;
        }}
      ></Controller>
    </div>
  );
}
export default FormField;
