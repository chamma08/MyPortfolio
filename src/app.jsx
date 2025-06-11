import { BrowserRouter } from "react-router-dom";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";

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
      </BrowserRouter>
    </>
  );
};

export default App;
