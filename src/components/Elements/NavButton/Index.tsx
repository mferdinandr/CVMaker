import { PDFDownloadLink } from '@react-pdf/renderer';
import ToPDF from '../../../services/toPDF';

import { DeleteButton, SecondaryButton, SuccessButton } from '../Button/Index';

import { TPersonalInfo } from '../../Fragments/Preview/Index';

interface NavButtonProps {
  onClickLoad?: () => void;
  onClickClear?: () => void;
  personalInfo: TPersonalInfo | null;
}

const NavButton: React.FC<NavButtonProps> = ({
  onClickLoad,
  onClickClear,
  personalInfo,
}) => {
  return (
    <div className="fixed w-[38.2vw] py-3 border-b-2 top-0 border-black/60 ml-5 bg-white px-1">
      <div>
        <PDFDownloadLink
          document={<ToPDF personalInfo={personalInfo} />}
          fileName="Uhuy"
        >
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
      <div className="flex justify-center gap-2 mt-3">
        <DeleteButton onClick={onClickClear}>Clear</DeleteButton>
        <SecondaryButton onClick={onClickLoad}>Load Example</SecondaryButton>
      </div>
    </div>
  );
};

export default NavButton;
