import "./App.css";
import Footer from "./components/Footer/Footer";
import InfoCard from "./components/InfoCard/InfoCard";
import Navbar from "./components/NavBar/NavBar";
import Reviews from "./components/Responses/Responses";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <InfoCard />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
