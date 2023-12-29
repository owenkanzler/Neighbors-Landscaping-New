import React, { useRef } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u1p8zxv",
        "template_sk73ywp",
        form.current,
        "s9vm-_Fi9L5yBibVl"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message was sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <h5>Let us know about your project</h5>
      <form ref={form} action="#" onSubmit={sendEmail}>
        <div className="input-box">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="test@test.com"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="text"
            name="number"
            id="phone-number"
            placeholder="xxx-xxx-xxxx"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="type">Project Type</label>
          <select name="type" id="type" required>
            <option value="">Select Project Type</option>
            <option value="Landscaping & Property Maintence">
              Landscaping & Property Maintence
            </option>
            <option value="Hardscape">Hardscape</option>
            <option value="Excavation">Excavation</option>
          </select>
        </div>
        <div className="textarea-box">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>
        <div className="btn-box">
          <button className="button" type="submit" value="send">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
