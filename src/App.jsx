import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ratnagari from "./pages/products/Ratnagari";
import Devgad from "./pages/products/Devgad";
import Pawas from "./pages/products/Pawas";
import ScrollToTop from "./scrollToTop";
import WhyChooseUs from "./components/WhyChooseUs";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/why-us" element={<WhyChooseUs />} />
      </Routes>
      <Routes>
        <Route path="/ratnagari" element={<Ratnagari />} />
        <Route path="/devgad" element={<Devgad />} />
        <Route path="/pawas" element={<Pawas />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
