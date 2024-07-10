import Global from "../../components/global/Global";
import Info from "../../components/info/Info";
import Navbar from "../../components/navabar/Navabar";
import Footer from "../../components/footer/Footer";

function HomePage() {
  return (
    <div>
      <Navbar/>
      <Info/>
    <Global/>
    <Footer/>
    </div>
  );
}

export default HomePage;
