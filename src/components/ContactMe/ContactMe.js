import React from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";

export default function ContactMe() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_robinsrk3",
        "template_x5cjrpr",
        e.target,
        "user_Y3HZNsxeltXUo5p5Simfx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div id="contactus" className="pt-5">
      <h1
        style={{
          color: "#fa6454",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "100px",
        }}
      >
        Contact Me
      </h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          className="input"
          name="from_name"
          placeholder="Name"
        />
        <br />
        <input
          type="email"
          className="input"
          name="reply_to"
          placeholder="Email"
        />
        <br />
        <textarea name="message" placeholder="Message" className="input" />
        <br />
        <div className="submit-btn">
          <input type="submit" className="btn" value="Send" />
        </div>
      </form>
    </div>
  );
}
