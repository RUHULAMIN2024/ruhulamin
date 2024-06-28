import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1 className="text-center mt-5 text-4xl">CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          
          <a href="https://www.facebook.com/ruhulamin15jun1999" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.instagram.com/ruhulamin15jun1999" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://x.com/ruhulamin_2024" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/ruhulamin2024" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://github.com/RUHULAMIN2024" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
         
          <a
            href="mailto:ruhulamin15jun1999@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
