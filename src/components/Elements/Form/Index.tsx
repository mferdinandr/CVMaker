import { Label } from './Label';
import { Input } from './Form';
import { ChangeEvent } from 'react';

interface FormProps {
  label: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}

const Form: React.FC<FormProps> = ({
  label,
  id,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <div className="flex flex-col my-2">
      <Label label={label} id={id} />
      <Input
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Form;
