import React from "react";
import "../myFiles/contact.css";

const Contact = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="contact-left">
          <h1 class="sub-title">Contact Me</h1>
          <p>
            <i class="fa fa-envelope"></i>jogu.sairam1@gmail.com
          </p>
          <p>
            <i class="fa fa-phone"></i>+91 7325943033
          </p>
          <div class="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=100008804611252"
              target="_blank"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>

            <a href="https://www.instagram.com/invites/contact/?i=1eqyk2hejpx4c&utm_content=2ql4j3k">
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://twitter.com/Sairam__Jogu?t=2cgtAV9X6cXicGo5f7G77g&s=09"
              target={"_blank"}
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>
          <a href="#" class="btn1 btn2">
            Download CV
          </a>
        </div>
        <div class="contact-right">
          <form>
            <input type="text" name="Name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="Message"
              rows="6"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" class="btn1 btn2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
