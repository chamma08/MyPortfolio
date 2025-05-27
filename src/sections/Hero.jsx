import React from "react";
import { words } from "../constants";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="top-0 absolute left-0 z-10">
        <img src="/images/bg.png" alt="Background" />
      </div>

      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center gap-1 md:gap-3 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span className="text">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Matheesha Dissanayake, a Software Engineer based in Sri
              Lanka with a passion for transforming innovative ideas into
              impactful software solutions. With a focus on delivering
              high-quality, user-centric applications, I leverage my expertise
              in modern technologies to create products that not only meet but
              exceed expectations.
            </p>
            <Button 
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
