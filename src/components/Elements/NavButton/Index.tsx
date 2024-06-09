import { PDFDownloadLink } from '@react-pdf/renderer';
import ToPDF from '../../../services/toPDF';

import { DeleteButton, SecondaryButton, SuccessButton } from '../Button/Index';

const NavButton = () => {
  return (
    <div className="w-screen md:flex">
      <div className="md:border-b-2 border-black/80 md:w-[37%] px-4 py-7 fixed w-screen z-10 bg-white md:ml-4">
        <div>
          <PDFDownloadLink document={<ToPDF />} fileName="Uhuy">
            {({ loading }) =>
              loading ? (
                <SecondaryButton>Loading Document...</SecondaryButton>
              ) : (
                <div className="md:flex justify-center w-full">
                  <SuccessButton>Download</SuccessButton>
                </div>
              )
            }
          </PDFDownloadLink>
        </div>
        <div className="flex justify-center gap-5 mt-3">
          <DeleteButton>Clear</DeleteButton>
          <SecondaryButton>Load Example</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default NavButton;
