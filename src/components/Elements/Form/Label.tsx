export const Label = ({ label, id }) => {
  return (
    <label htmlFor={id} className="mb-1 ml-1 font-bold">
      {label}
    </label>
  );
};
