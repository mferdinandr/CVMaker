import { PDFDownloadLink } from '@react-pdf/renderer';
import ToPDF from '../../../services/toPDF';

import { DeleteButton, SecondaryButton, SuccessButton } from '../Button/Index';

interface NavButtonProps {
  onClickLoad?: () => void;
  onClickClear?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ onClickLoad, onClickClear }) => {
  return (
    <div className="">
      <div className="">
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
          <DeleteButton onClick={onClickClear}>Clear</DeleteButton>
          <SecondaryButton onClick={onClickLoad}>Load Example</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default NavButton;
