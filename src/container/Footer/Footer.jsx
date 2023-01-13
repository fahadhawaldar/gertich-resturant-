import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import styles from "./Footer.module.css";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";

const Footer = () => (
  <div className={`${styles.footer} section__padding`} id='contacts'>
    <FooterOverlay />
    <Newsletter />

    <div className={styles.footerlinks}>
      <div className={styles.footercontacts}>
        <h1 className={styles.headtext}>Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230 </p>
        <p className="p__opensans"> +1 212-555-1230</p>
      </div>
      <div className={styles.footerlogo}>
        <img src={images.gericht} alt="footerlog" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img src={images.spoon} alt="" />
        <div className={styles.links}>
          <FiFacebook /> <FiTwitter /> <FiInstagram />
        </div>
      </div>
      <div className={styles.work}>
        <h1 className={styles.headtext}>Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am -12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00am -11:00 pm</p>
      </div>
    </div>

    <div className={styles.copy}>
      <p className="p__opensans" style={{ color: "var(--color-grey)" }}>
        2021 Gerícht. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
