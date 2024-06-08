import { Label } from './Label';
import { Input } from './Form';

const Form = ({ label, id, onChange, value, placeholder }) => {
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
