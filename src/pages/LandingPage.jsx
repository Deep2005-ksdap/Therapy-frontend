import { useState } from "react";
import Nav2 from "../components/Nav2";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Category from "./Category";
import Chatbot from "./Chatbot";
import AboutUs from "./AboutUs";
import Footer from "../components/Footer";

const LandingPage = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-tr from-[#55fdc4] via-[#C3FFEB] to-[#55fdc4]">
      <Navbar />
      <Nav2 props={{ active, setActive }} />
      <div className="sm:py-10 md:py-15 ">
        {active === 1 && <Home />}
        {active === 2 && <Category />}
        {active === 3 && <Chatbot />}
        {active === 4 && <AboutUs />}
      </div>
      <Footer />
    </div>
  );
};
export default LandingPage;
