import NavButton from '../../Elements/NavButton/Index';
import Form from '../../Elements/Form/Index';

const LeftNavbar = () => {
  return (
    <div className="w-2/5">
      <NavButton />
      <form className="my-[24vh] h-auto">
        <div className="flex justify-around">
          <Form label={'Nama Awal'} id={'nameAwal'} />
          <Form label={'Nama Akhir'} id={'nameAkhir'} />
        </div>
        <Form label={'Nama'} id={'name'} />
        <Form label={'Nama'} id={'name'} />
        <Form label={'Nama'} id={'name'} />
        <Form label={'Nama'} id={'name'} />
        <Form label={'Nama'} id={'name'} />
        <Form label={'Nama'} id={'name'} />
        <Form label={'Nama'} id={'name'} />
      </form>
    </div>
  );
};

export default LeftNavbar;
