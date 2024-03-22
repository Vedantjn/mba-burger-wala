import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MBA Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @mbaburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.linkedin.com/in/vedant-jain-192915194/">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/Vedantjn">
          <AiFillGithub />
        </a>
        <a href="https://github.com/meabhisingh">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
