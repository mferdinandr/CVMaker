import { useState } from 'react';
import Personal from '../LeftNavbar/Personal/Index';
import NavButton from '../../Elements/NavButton/Index';

import Database from '/src/data/data.js';

const MainPage = () => {
  const [personalInfo, setPersonalInfo] = useState<{
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string;
  } | null>(null);

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
      <NavButton onClickLoad={handleLoadExample} onClickClear={handleClear} />
      <div className="">
        <div className=" ">
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
          <div className="">
            <h1>{personalInfo.fullName}</h1>
            <h1>{personalInfo.email}</h1>
            <h1>{personalInfo.phoneNumber}</h1>
            <h1>{personalInfo.address}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
