import MainPage from './pages/MainPage';
import ToPDF from './services/toPDF';
import { PDFDownloadLink } from '@react-pdf/renderer';

const App = () => {
  return (
    <div className="h-[1000px]">
      <PDFDownloadLink document={<ToPDF />} fileName="Uhuy">
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>
      <MainPage />
    </div>
  );
};

export default App;
