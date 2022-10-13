import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
const Contact = () => {
  return (
    <>
      {/* <div className="contactContainer">
      <a className="mailBtn" href="mailto:parilsanghvi@gmail.com">
        <Button>Contact: parilsanghvi@gmail.com</Button>
      </a>
    </div> */}
      <div
        style={{
          display: "flex",
          marginTop: "50px",
          justifyContent: "center",
        }}
      >
        <form className="contact-form">
          <TextField
            id="standard-multiline-flexible"
            label="Message"
            placeholder="Enter Message"
            variant="outlined"
            multiline
            rowsMax={4}
            required
            type="text"
          />
          <br />
          <br />
          <br />

          <TextField
            id="outlined-basic"
            placeholder="Enter your name"
            label="Name"
            variant="outlined"
            required
            type="text"
          />
          <br />
          <br />
          <br />

          <TextField
            id="outlined-basic"
            label="Email"
            placeholder="Enter email address"
            variant="outlined"
            required
            type="email"
          />
          <br />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            placeholder="Enter Subject"
            label="Subject"
            variant="outlined"
            required
          />
          <br />
          <br />
          <br />
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                backgroundColor: "rgb(37, 37, 37)",
                color: "#fff",
                fontSize: "30px",
                borderRadius: "7px",
                fontFamily:
                  "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
              }}
              type="submit"
              className="button button-primary"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
