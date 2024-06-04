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
      <div className="w-screen md:flex">
        <div className="md:border-r-2 border-b-2 border-black md:w-2/5 box-border px-4 py-7 fixed md:h-screen w-screen z-10 bg-white/50">
          <div>
            <PDFDownloadLink document={<ToPDF />} fileName="Uhuy">
              {({ loading }) =>
                loading ? (
                  <SecondaryButton>Loading Document...</SecondaryButton>
                ) : (
                  <div className="md:flex justify-center w-full">
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
        <div className="bg-blue-200 md:w-3/5 absolute md:right-0 w-screen top-[23vh] md:top-0">
          dada
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
