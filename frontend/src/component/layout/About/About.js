import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const About = () => {
  const visitGitHub = () => {
    window.location = "https://github.com/Thunderer0";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div  >
            <div  className="aboutus " >Paril Sanghvi</div>
             <div  className="aboutus">Mudit Nema</div>
             <div  className="aboutus">Shreyas Mahajan</div>
             <div  className="aboutus">Himanshu Tirole</div>
             <div  className="aboutus">Riya Shah</div>
            <div   className="aboutus">
              This is a  wesbite made by Team 2.
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
