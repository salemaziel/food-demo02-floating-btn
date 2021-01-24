import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYelp } from 'react-icons/fa'


import footerStyles from "./footer.module.css";

const Footer = () => (

      <footer id="footer" className={footerStyles.Footer}>
        <div id="contact" />
        <div className={footerStyles.content}>
          <div className={footerStyles.inner}>
            <section className={footerStyles.about}>
              <h3>Contact Us</h3>
              <p>
               Got A Question or Concern? 
              </p>
              <ul className={footerStyles.actions}>
                <li>
                  <a href="#" className={footerStyles.button}>
                  Send Us A Message
                  </a>
                </li>
              </ul>
            </section>
            <div className={footerStyles.contact}>
            <ul className={footerStyles.iconBulleted}>
              <h3>Like Us On Social Media</h3>
              <li className={footerStyles.Social}>
              <a href="https://yelp.com"><FaYelp /></a>
                  <a href="https://facebook.com"><FaFacebook /></a> 
                  <a href="https://instagram.com"><FaInstagram /></a>
                  <a href="https://twitter.com"><FaTwitter /></a>
                  {/*<a href="https://researchgate.com"><FaResearchgate /></a>
                  <a href="https://linkedin.com"><FaLinkedin /></a>*/}
              </li>
            </ul>
            </div>
          </div>
        </div>
        <p className={footerStyles.copyright}>
          Created by <a href="https://salemaziel.com">Salem Aziel</a> © All Rights Reserved
          </p>

      </footer>
    );
;
export default Footer;
