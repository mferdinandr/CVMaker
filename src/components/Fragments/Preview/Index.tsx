import { useState } from 'react';
import Personal from '../LeftNavbar/Personal/Index';
import NavButton from '../../Elements/NavButton/Index';

import ToPDF from '../../../services/toPDF';
import Database from '../../../data/data.ts';

export type TPersonalInfo = {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
};

const MainPage = () => {
  const [personalInfo, setPersonalInfo] = useState<TPersonalInfo | null>(null);

  const handleLoadExample = () => {
    setPersonalInfo(Database.personalInfo);
  };

  const handleClear = () => {
    setPersonalInfo(null);
  };

  console.log('oooooo', personalInfo);

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.id;
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo!,
      [key]: e.target.value,
    }));
  };

  return (
    <div>
      {/* BUTTON */}
      <NavButton
        onClickLoad={handleLoadExample}
        onClickClear={handleClear}
        personalInfo={personalInfo}
      />
      <div className="flex gap-5 mx-5 mt-5">
        <div className="w-2/5 mt-[6.5rem]">
          <Personal
            onChange={handlePersonalInfoChange}
            valueName={personalInfo?.fullName || ''}
            valueEmail={personalInfo?.email || ''}
            valueAddress={personalInfo?.address || ''}
            valuePhoneNumber={personalInfo?.phoneNumber || ''}
          />
        </div>

        {/* PREVIEW */}
        {personalInfo && (
          <div className="w-3/5 h-[1000px]">
            <h1>{personalInfo.fullName}</h1>
            <h1>{personalInfo.email}</h1>
            <h1>{personalInfo.phoneNumber}</h1>
            <h1>{personalInfo.address}</h1>
          </div>
        )}
      </div>
      {/* ToPDF component */}
      {personalInfo && <ToPDF personalInfo={personalInfo} />}
    </div>
  );
};

export default MainPage;
