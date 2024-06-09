import { ChangeEvent, useState } from 'react';
import Personal from '../LeftNavbar/Personal/Index';
import NavButton from '../../Elements/NavButton/Index';

interface Data {
  email: string;
  name: string;
}

const MainPage = () => {
  const [data, setData] = useState<Data>({ name: '', email: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.id;
    setData({ ...data, [key]: e.target.value });
  };

  console.log(data);

  return (
    <div>
      {/* BUTTON */}
      <NavButton />
      <div className="flex bg-red-200 md:gap-10 md:mx-4 md:my-2">
        <div className="flex abso bg-blue-200 w-2/5 mt-[22vh] h-[1000px]">
          <Personal
            onChange={handleChange}
            valueName={data.name}
            valueEmail={data.email}
          />
        </div>

        {/* PREVIEW */}
        <div className="w-3/5">
          <h1>{data.name}</h1>
          <h1>{data.email}</h1>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
