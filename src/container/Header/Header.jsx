import React from "react";

import styles from "./Header.module.css";

import { images } from "../../constants";
import { SubHeading } from "../../components";

const Header = () => (
  <div className={`${styles.header} app__wrapper section__padding`} id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className={styles.heading}> The key to Fine dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="headimg" />
    </div>
  </div>
);

export default Header;
