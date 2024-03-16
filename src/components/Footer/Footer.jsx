import React from "react";
import { Link } from "react-router-dom";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <Link to="/">
                <img src="logo.png" alt="" class="img-fluid logo-footer" />
              </Link>{" "}
              <br />
              <div class="footer-about">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="useful-link">
                <h2>Useful Links</h2>
                <div class="use-links">
                  <li>
                    <Link to="/">
                      <span className="footer-span">
                        <TbArrowBadgeRightFilled className="footer-icon" /> Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      <span className="footer-span">
                        <TbArrowBadgeRightFilled className="footer-icon" />{" "}
                        About Us
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <span className="footer-span">
                        <TbArrowBadgeRightFilled className="footer-icon" />{" "}
                        Contact
                      </span>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="social-links">
                <h2>Follow Us</h2>
                <div class="social-icons">
                  <li>
                    <a target="blank" href="https://www.facebook.com">
                      <span className="footer-span">
                        <BsFacebook className="footer-icon" /> Facebook
                      </span>
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="https://www.instagram.com">
                      <span className="footer-span">
                        <BsInstagram className="footer-icon" /> Instagram
                      </span>
                    </a>
                  </li>
                  <li>
                    <a target="blank" href="https://www.linkedin.com">
                      <span className="footer-span">
                        <BsLinkedin className="footer-icon" /> LinkedIn
                      </span>
                    </a>
                  </li>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="address">
                <h2>Address</h2>
                <div class="address-links">
                  <li class="address1">
                    <span className="footer-span">
                      <TbArrowBadgeRightFilled className="footer-icon" />{" "}
                      Jaipur, Rajasthan, India
                    </span>
                  </li>
                  <li>
                    <a href="">
                      <span className="footer-span">
                        <TbArrowBadgeRightFilled className="footer-icon" /> +91
                        90904500112
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="footer-span">
                        <TbArrowBadgeRightFilled className="footer-icon" />{" "}
                        mail@1234567.com
                      </span>
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section id="copy-right">
        <div class="copy-right-sec">
          <span className="footer-span-last">
            <LuCopyright />
            2024 ArtisianVista <a href="#">link here</a>
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;
