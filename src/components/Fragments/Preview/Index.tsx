import { ChangeEvent, useState } from 'react';
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
  summary: string;
};

const MainPage = () => {
  const [personalInfo, setPersonalInfo] = useState<TPersonalInfo | null>(null);

  const handleLoadExample = () => {
    setPersonalInfo(Database.personalInfo);
  };

  const handleClear = () => {
    setPersonalInfo(null);
  };

  const handlePersonalInfoChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const key = e.target.id;
    setPersonalInfo((prevPersonalInfo) => ({
      ...prevPersonalInfo!,
      [key]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col h-screen">
      {/* BUTTON */}
      <div className="overflow-y-auto h-12">
        <NavButton
          onClickLoad={handleLoadExample}
          onClickClear={handleClear}
          personalInfo={personalInfo}
        />
      </div>
      <div className="flex flex-1">
        <div className="overflow-y-auto w-2/5 max-h-[calc(100vh-48px)] mt-[8.2rem] px-4 bg-red-200 pb-16">
          {/* PERSONAL INFO FORM */}
          <Personal
            onChange={handlePersonalInfoChange}
            valueName={personalInfo?.fullName || ''}
            valueEmail={personalInfo?.email || ''}
            valueAddress={personalInfo?.address || ''}
            valuePhoneNumber={personalInfo?.phoneNumber || ''}
            valueLinkedin={personalInfo?.linkedIn || ''}
            valueSummary={personalInfo?.summary || ''}
          />
        </div>
        {/* PREVIEW */}
        <div className="overflow-y-auto w-3/5 max-h-[calc(100vh-48px)] bg-blue-200 mx-4 mt-5">
          {personalInfo && (
            <div style={defaultStyle}>
              <h1 className="font-bold text-2xl text-center mb-[-5px]">
                {personalInfo.fullName}
              </h1>
              <h1 className="text-center">{personalInfo.address}</h1>
              <div className="flex justify-center text-sm gap-1">
                <h1>Tel : {personalInfo.phoneNumber} | </h1>
                <h1>Email: {personalInfo.email} | </h1>
                <h1>LinkedIn : {personalInfo.linkedIn} </h1>
              </div>
              <div>
                <h1 className="font-bold text-center text-lg pt-5">SUMMARY</h1>
                <hr className="border-[1.5px] my-[1.5px] border-black w-[90%] mx-auto" />
                <h1 className="text-sm text-center px-7">
                  {personalInfo.summary}
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* ToPDF component */}
      <div className="hidden">
        {personalInfo && <ToPDF personalInfo={personalInfo} />}
      </div>
    </div>
  );
};

export default MainPage;
