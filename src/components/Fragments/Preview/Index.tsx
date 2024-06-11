import { useState } from 'react';
import Personal from '../LeftNavbar/Personal/Index';
import NavButton from '../../Elements/NavButton/Index';

import ToPDF from '../../../services/toPDF';
import Database from '../../../data/data.ts';
import { defaultStyle } from '../../../style.ts';

export type TPersonalInfo = {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  linkedIn: string;
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
            valueLinkedin={personalInfo?.linkedIn || ''}
          />
        </div>

        {/* PREVIEW */}
        {personalInfo && (
          <div className="w-3/5 h-[1000px]" style={defaultStyle}>
            <h1 className="font-bold text-[2rem] text-center mb-[-5px]">
              {personalInfo.fullName}
            </h1>
            <h1 className="text-center">{personalInfo.address}</h1>
            <div className="flex justify-center text-[14px] gap-1">
              <h1>Tel : {personalInfo.phoneNumber} | </h1>
              <h1>Email: {personalInfo.email} | </h1>
              <h1>LinkedIn : {personalInfo.linkedIn} </h1>
            </div>
          </div>
        )}
      </div>
      {/* ToPDF component */}
      {personalInfo && <ToPDF personalInfo={personalInfo} />}
    </div>
  );
};

export default MainPage;
