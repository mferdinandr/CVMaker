import Footer from '../components/Fragments/Footer/Index';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ToPDF from '../services/toPDF';
import {
  DeleteButton,
  SecondaryButton,
  SuccessButton,
} from '../components/Elements/Button/Index';

const MainPage = () => {
  return (
    <div>
      <div className="w-screen flex ">
        <div className="border-r-2 border-black w-2/5 box-border px-4 py-7 fixed h-screen">
          <div>
            <PDFDownloadLink document={<ToPDF />} fileName="Uhuy">
              {({ loading }) =>
                loading ? (
                  <SecondaryButton>Loading Document...</SecondaryButton>
                ) : (
                  <div className="flex justify-center w-full">
                    <SuccessButton length="100%">Download</SuccessButton>
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
        <div className="bg-blue-200 w-3/5 absolute right-0">dada</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
