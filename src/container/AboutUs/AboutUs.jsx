import React from "react";

import styles from "./AboutUs.module.css";
import { images } from "../../constants";

const AboutUs = () => (
  <div
    className={`${styles.aboutus} app__bg flex__center section__padding `}
    id="about"
  >
    <div className={`${styles.aboutsoverlay} flex__center`}>
      <img src={images.G} alt="g letter" />
    </div>

    <div className={` flex__center ${styles.aboutcontent}`}>
      <div className={styles.content_aboutus}>
        <h1 className="headtext__cormorant "> About us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>
      <div className={`${styles.knife} flex__center`}>
        <img src={images.knife} alt="knife" />
      </div>
      <div className={styles.content_history}>
        <h1 className="headtext__cormorant "> Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
