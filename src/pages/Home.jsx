import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import Features from "../components/Features";
import HomeContainer from "../components/HomeContainer";
import HomeProducts from "../components/HomeProducts";
import LifeCycle from "../components/LifeCycle";

import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <HomeContainer />
      <Features />
      <HomeProducts />
      <Banner />
      <LifeCycle />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default Home;
