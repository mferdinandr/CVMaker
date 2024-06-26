import Form from '../../../Elements/Form/Index';
import { ChangeEvent } from 'react';
import { Title } from '../../../Elements/Text/Index';

interface PersonalFormProps {
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;  
  valueName: string;
  valueEmail: string;
  valuePhoneNumber: string;
  valueAddress: string;
  valueLinkedin: string;
  valueSummary: string;
}

const Personal: React.FC<PersonalFormProps> = ({
  onChange,
  valueName,
  valueEmail,
  valuePhoneNumber,
  valueAddress,
  valueLinkedin,
  valueSummary,
}) => {
  return (
    <div className="w-full">
      <form className="">
        <Title>Personal Information</Title>
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
        <Form
          label={'LinkedIn'}
          id={'linkedIn'}
          onChange={onChange}
          value={valueLinkedin}
          placeholder={'linkedin.com/in/xxxxx'}
        />
        <Form
          typeForm="textarea"
          label={'Summary'}
          id={'summary'}
          onChange={onChange}
          value={valueSummary}
          placeholder={'I`m a ......'}
        />
      </form>
    </div>
  );
};

export default Personal;
