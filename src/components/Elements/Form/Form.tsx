export const Input = ({ id, onChange, value, placeholder }) => {
  return (
    <input
      type="text"
      name={id}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      className="pl-3 p-2 border-[1px] border-black rounded-md"
    />
  );
};
