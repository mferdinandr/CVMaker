import Form from '../../../Elements/Form/Index';
import { ChangeEvent } from 'react';

interface PersonalFormProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  valueName: string;
  valueEmail: string;
  valuePhoneNumber: string;
  valueAddress: string;
}

const Personal: React.FC<PersonalFormProps> = ({
  onChange,
  valueName,
  valueEmail,
  valuePhoneNumber,
  valueAddress,
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
        <Form
          label={'Phone Number'}
          id={'phoneNumber'}
          onChange={onChange}
          value={valuePhoneNumber}
          placeholder={'62 8572772210'}
        />
        <Form
          label={'Address'}
          id={'address'}
          onChange={onChange}
          value={valueAddress}
          placeholder={'Jakarta, Indonesia'}
        />
      </form>
    </div>
  );
};

export default Personal;
