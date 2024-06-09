import Form from '../../../Elements/Form/Index';
import { ChangeEvent } from 'react';

interface PersonalFormProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  valueName: string;
  valueEmail: string;
}

const Educations: React.FC<PersonalFormProps> = ({
  onChange,
  valueDegree,
  valueSchoolName,
  valueLocation,
  valueStartDate,
  valueEndDate,
}) => {
  return (
    <div className="w-full">
      <form className="">
        <Form
          label={'Degree'}
          id={'degree'}
          onChange={onChange}
          value={valueDegree}
          placeholder={'Degree'}
        />
        <Form
          label={'School Name'}
          id={'schoolName'}
          onChange={onChange}
          value={valueSchoolName}
          placeholder={'University of ...'}
        />
        <Form
          label={'Location'}
          id={'location'}
          onChange={onChange}
          value={valueLocation}
          placeholder={'Jakarta, Indonesia'}
        />
        <Form
          label={'Start Date'}
          id={'startDate'}
          onChange={onChange}
          value={valueStartDate}
          placeholder={'Agustus 20xx'}
        />
        <Form
          label={'End Date'}
          id={'endDate'}
          onChange={onChange}
          value={valueEndDate}
          placeholder={'Agustus 20xx'}
        />
      </form>
    </div>
  );
};

export default Educations;
