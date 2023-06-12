import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kzk3pig",
        "template_tt1p7zv",
        form.current,
        "eL7CJABnhHpv0fDYj"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="card">
      <h1>Contact Me</h1>
      <div className="contact">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
