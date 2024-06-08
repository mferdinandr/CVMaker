import Footer from '../components/Fragments/Footer/Index';
import LeftNavbar from '../components/Fragments/LeftNavbar/Index';
import RightBar from '../components/Fragments/Preview/Index';

const MainPage = () => {
  return (
    <div>
      <div>
        <LeftNavbar />
        <RightBar />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
