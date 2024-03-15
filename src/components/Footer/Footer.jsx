import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>abduallahelbialy@gmail.com</span>
        <div className="f-icons">
        <a target="blank" href="https://www.instagram.com/abdauallah_elbialy/">

        <Insta color="white" size={"3rem"} />
        </a>
          <a target="blank" href="https://www.facebook.com/profile.php?id=100007727587344">
           <Facebook color="white" size={"3rem"} />
          </a>
          <a target="blank" href="https://github.com/abduallahelbialy">
          <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
