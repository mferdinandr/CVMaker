import { ChangeEvent, useState } from 'react';
import Personal from '../LeftNavbar/Personal/Index';
import NavButton from '../../Elements/NavButton/Index';
import Educations from '../LeftNavbar/Educations/Index';

import Database from '/src/data/data.js';

const MainPage = () => {
  const [data, setData] = useState(Database);

  const [personalInfo, setPersonalInfo] = useState(Database.personalInfo);
  const [educations, setEducations] = useState(Database.sections.educations);

  console.log(educations);

  const handlePersonalInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.id;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  };

  console.log(data);

  return (
    <div>
      {/* BUTTON */}
      <NavButton />
      <div className="flex bg-red-200 md:gap-10 md:mx-4 md:my-2">
        <div className=" bg-blue-200 w-2/5 mt-[22vh] h-[1000px]">
          <Personal
            onChange={handlePersonalInfoChange}
            valueName={personalInfo.fullName}
            valueEmail={personalInfo.email}
          />
          <Educations />
        </div>

        {/* PREVIEW */}
        <div className="w-3/5">
          <h1>{personalInfo.fullName}</h1>
          <h1>{personalInfo.email}</h1>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
