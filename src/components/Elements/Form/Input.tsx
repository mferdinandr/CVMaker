import React, { ChangeEvent } from 'react';

interface InputProps {
  id: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value: string;
  placeholder: string;
  typeForm?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  placeholder,
  typeForm,
}) => {
  return typeForm === 'textarea' ? (
    <textarea
      name={id}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      rows={11}
      value={value}
      className="pl-3 p-2 border-[1px] border-black rounded-md"
    />
  ) : (
    <input
      type={typeForm}
      name={id}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      className="pl-3 p-2 border-[1px] border-black rounded-md"
    />
  );
};
