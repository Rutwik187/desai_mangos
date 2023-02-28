// import Banners from "./components/banners";
import Features from "./components/Features";
import HomeContainer from "./components/HomeContainer";
import HomeProducts from "./components/HomeProducts";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Navbar />

      <HomeContainer />
      <Features />
      {/* <Products /> */}
      {/* <Banners /> */}
      <HomeProducts />
    </div>
  );
}

export default App;
