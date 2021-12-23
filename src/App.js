import "././styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { SliderData } from "./components/Gallery/SliderData";

function App() {
  return (
    <main className="container">
      <Navbar />
      <Hero />
      <Services />
      <Gallery slides={SliderData} />
      <Footer />
    </main>
  );
}

export default App;
