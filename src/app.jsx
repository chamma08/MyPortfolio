import { BrowserRouter } from "react-router-dom";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import ExperienceSection from "./sections/ExperienceSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <BrowserRouter>
        <ShowcaseSection />
        <ExperienceSection />
      </BrowserRouter>
    </>
  );
};

export default App;
