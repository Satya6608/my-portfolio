import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import { IoCallOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_2yxpwrc',
        'template_6ete69d',
        formRef.current,
        'Pm2clKUHS9boIWIdD'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease',
      once: true,
      mirror: false
    });
  }, []);
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article data-aos="flip-right" className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>satya@gmail.com</h5>
            <a href="mailto:satyaprakash6608@gmail.com">Send a Mail</a>
          </article>
          <article data-aos="flip-up" className="contact__option">
            <IoCallOutline className="contact__option-icon" />
            <h4>Mobile No.</h4>
            <h5>8076419914</h5>
            <a href="tel:8076419914">Call</a>
          </article>
          <article data-aos="flip-left" className="contact__option">
            <IoChatbubbleEllipsesOutline className="contact__option-icon" />
            <h4>Chat</h4>
            <h5>8076419914</h5>
            <a href="https://wa.me/+918076419914">Start Chat</a>
          </article>
        </div>
        <form data-aos="zoom-in-down" ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="from_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="reply_to"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
