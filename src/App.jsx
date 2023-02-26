import Features from "./components/Features";
import HomeContainer from "./components/HomeContainer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Navbar />

      <HomeContainer />
      <Features />
      <Products />
    </div>
  );
}

export default App;
