import React from "react";

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById("counter");
        if (element && id) {
          const offset = window.innerHeight * 0.15;

          const top = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: top,
            behavior: "smooth",
          });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="Arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
