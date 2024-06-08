import React, { ChangeEvent } from 'react';

interface InputProps {
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  placeholder,
}) => {
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
