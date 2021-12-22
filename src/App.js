import "././styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <main className="container">
      <Navbar />
      <Hero />
      {/* <Gallery /> */}
      <Services />
      <Footer />
    </main>
  );
}

export default App;
