import HomeContainer from "./components/HomeContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Navbar />
      <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
        <HomeContainer />
      </main>
    </div>
  );
}

export default App;
