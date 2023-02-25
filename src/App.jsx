import HomeContainer from "./components/HomeContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Navbar />

      <HomeContainer />
    </div>
  );
}

export default App;
