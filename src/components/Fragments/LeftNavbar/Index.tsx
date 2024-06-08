import NavButton from '../../Elements/NavButton/Index';
import Form from '../../Elements/Form/Index';

const Personal = ({ onChange, valueName, valueEmail }) => {
  return (
    <div className="w-2/5">
      <NavButton />
      <form className="my-[24vh] h-auto">
        <Form
          label={'Nama'}
          id={'name'}
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
      </form>
    </div>
  );
};

export default Personal;
