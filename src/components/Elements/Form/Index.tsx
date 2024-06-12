import { Label } from './Label';
import { Input } from './Input';
import { ChangeEvent } from 'react';

interface FormProps {
  label: string;
  id: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value: string;
  placeholder: string;
  typeForm?: string;
}

const Form: React.FC<FormProps> = ({
  label,
  id,
  onChange,
  value,
  placeholder,
  typeForm,
}) => {
  return (
    <div className="flex flex-col my-2">
      <Label label={label} id={id} />
      <Input
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        typeForm={typeForm}
      />
    </div>
  );
};

export default Form;
