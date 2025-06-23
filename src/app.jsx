import { BrowserRouter } from "react-router-dom";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import FeatureCards from "./sections/FeatureCards";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <BrowserRouter>
        <ShowcaseSection />
        <FeatureCards />
        <TechStack />
        <ExperienceSection />
        <Contact />
      </BrowserRouter>
      <Footer />
    </>
  );
}
