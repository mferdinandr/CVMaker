const Form = ({ label, id }) => {
  return (
    <div className="flex flex-col my-2">
      <label htmlFor={id} className="mb-1 ml-1 font-bold">
        {label}
      </label>
      <input
        type="text"
        name={id}
        id={id}
        className="pl-3 p-2 border-[1px] border-black rounded-md"
      />
    </div>
  );
};

export default Form;
