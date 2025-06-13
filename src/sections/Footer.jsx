import { socialImgs } from "../constants";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          {/* Terms & Conditions removed */}
        </div>
        <div className="socials">
          {/* Filter out X/Twitter icon and add links */}
          {socialImgs
            .filter(socialImg => !socialImg.name?.toLowerCase().includes('x') && 
                               !socialImg.name?.toLowerCase().includes('twitter'))
            .map((socialImg, index) => (
              <div key={index} className="icon">
                <a href={socialImg.link} target="_blank" rel="noopener noreferrer">
                  <img src={socialImg.imgPath} alt="social icon" />
                </a>
              </div>
            ))}
          
          {/* Add GitHub icon with link */}
          <div className="icon">
            <a href="https://github.com/chamma08" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Matheesha Dissanayake. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;