import React from "react";
import emailjs from "emailjs-com";

import "./ContactUs.css";

export default function ContactUs() {
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
    <form className="contact-form" onSubmit={sendEmail}>
      <input
        type="text"
        className="input"
        name="user_name"
        placeholder="Name"
      />
      <br />
      <input
        type="email"
        className="input"
        name="user_email"
        placeholder="Email"
      />
      <br />
      <textarea name="message" placeholder="Message" className="input" />
      <br />
      <div className="submit-btn">
        <input type="submit" className="btn" value="Send" />
      </div>
    </form>
  );
}
