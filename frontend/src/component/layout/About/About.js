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
        <Typography
          component="h1"
          style={{
            color: "#000",
            fontFamily:
              "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
          }}
        >
          About Us
        </Typography>

        <div>
          <div>
            <Typography
              style={{
                fontSize: "30px",
                color: "#000",
                fontFamily:
                  "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
                margin: "0px 0px 30px 0px",
              }}
            >
              TEAMP-02
            </Typography>
            <span
              style={{
                fontSize: "30px",
                fontFamily:
                  "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
              }}
            >
              Himanshu Tirole
            </span>
            <span
              style={{
                fontSize: "30px",
                fontFamily:
                  "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
              }}
            >
              Mudit Nema
            </span>
            <span
              style={{
                fontSize: "30px",
                fontFamily:
                  "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
              }}
            >
              Paril Sanghvi
            </span>
            <span
              style={{
                fontSize: "30px",
                fontFamily:
                  "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
              }}
            >
              Riya Shah
            </span>
            <span
              style={{
                fontSize: "30px",
                fontFamily:
                  "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
              }}
            >
              Shreyash Mahajan
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography
              style={{
                color: "#000",
                fontFamily:
                  "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
              }}
              component="h2"
            >
              Contact Us
            </Typography>
            <a
              href="https://github.com/Riya3012/SVNIT_Team-2_E-commerce"
              target="blank"
            >
              <GitHubIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
