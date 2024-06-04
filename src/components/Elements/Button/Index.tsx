export const DeleteButton = ({ children }) => {
  return (
    <button className="bg-red-500 rounded-lg hover:bg-red-100 border-[1px] hover:border-red-500 hover:text-red-600 text-white px-4 py-2 w-full">
      {children}
    </button>
  );
};

export const SuccessButton = ({ children, length }) => {
  return (
    <button
      className={`bg-green-500 rounded-lg hover:bg-green-100 border-[1px] hover:border-green-500 hover:text-green-500 w-[${length}] text-black px-4 py-2`}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children }) => {
  return (
    <button className="bg-orange-400 rounded-lg border-[1px] hover:border-orange-500 hover:bg-orange-100 hover:text-orange-500 text-black px-4 py-2 w-full">
      {children}
    </button>
  );
};
