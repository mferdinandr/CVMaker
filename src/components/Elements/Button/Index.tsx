import React from 'react';

interface DeleteButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

interface SuccessButtonProps {
  children: React.ReactNode;
}

interface SecondaryButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      className="bg-red-500 rounded-lg hover:bg-red-100 border-[1px] hover:border-red-500 hover:text-red-600 text-white px-4 py-2 w-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const SuccessButton: React.FC<SuccessButtonProps> = ({ children }) => {
  return (
    <button
      className={`bg-green-500 rounded-lg hover:bg-green-100 border-[1px] hover:border-green-500 hover:text-green-500 w-full text-black px-4 py-2`}
    >
      {children}
    </button>
  );
};

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      className="bg-orange-400 rounded-lg border-[1px] hover:border-orange-500 hover:bg-orange-100 hover:text-orange-500 text-black px-4 py-2 w-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
