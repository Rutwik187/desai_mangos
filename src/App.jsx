import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HomeContainer from "./components/HomeContainer";
import HomeProducts from "./components/HomeProducts";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductsDesc from "./components/ProductsDesc";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Navbar />

      <HomeContainer />
      <Features />
      {/* <Products /> */}
      <HomeProducts />
      <Banner />
      {/* <ProductsDesc /> */}
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
