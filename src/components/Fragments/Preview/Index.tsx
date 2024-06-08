import { ChangeEvent, useState } from 'react';
import Personal from '../LeftNavbar/Index';

interface Data {
  email: string;
  name: string;
}

const RightBar = () => {
  const [data, setData] = useState<Data>({ name: '', email: '' });

  const handleChange = (e) => {
    const key = e.target.id;
    setData({ ...data, [key]: e.target.value });
  };
  console.log(data);

  return (
    <div>
      <div>
        <div className="bg-blue-200 md:w-3/5  md:right-0 w-screen top-[23vh] md:top-0 absolute">
          <Personal
            onChange={handleChange}
            valueName={data.name}
            valueEmail={data.email}
          />
        </div>
        <div>
          <h1>{data.name}</h1>
          <h1>{data.email}</h1>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
