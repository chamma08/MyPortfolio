import { BrowserRouter } from "react-router-dom";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <BrowserRouter>
        <ShowcaseSection />
        {/* <LogoShowcase /> */}
        <FeatureCards />
        <TechStack />
        <ExperienceSection />
        <Contact/>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
