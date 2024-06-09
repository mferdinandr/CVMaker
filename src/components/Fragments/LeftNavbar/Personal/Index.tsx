import Form from '../../../Elements/Form/Index';
import { ChangeEvent } from 'react';

interface PersonalFormProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  valueName: string;
  valueEmail: string;
}

const Personal: React.FC<PersonalFormProps> = ({
  onChange,
  valueName,
  valueEmail,
}) => {
  return (
    <div className="w-full">
      <form className="">
        <Form
          label={'Nama'}
          id={'fullName'}
          onChange={onChange}
          value={valueName}
          placeholder={'Nama'}
        />
        <Form
          label={'Email'}
          id={'email'}
          onChange={onChange}
          value={valueEmail}
          placeholder={'Email@gamil.com'}
        />
      </form>
    </div>
  );
};

export default Personal;
