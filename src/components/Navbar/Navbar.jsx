import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navlogo}>
        <img src={images.gericht} alt="applogo" />
      </div>
      <ul className={styles.navlinks}>
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className={styles.login}>
        <a href="#login" className="p__opensans">
          Log in / Register
        </a>
        <div />
        <a href="#table" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className={styles.smallscreennav}>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=> setToggleMenu(true)}  />

        {toggleMenu && <div className={`${styles.menuoverlay} flex__center slide-bottom`}>
          <MdOutlineRestaurantMenu onClick={()=> setToggleMenu(false)}
            fontSize={27}
            className={styles.overlay_close}
          />
          <ul onClick={()=> setToggleMenu(false)} className={styles.smallsnavlinks}>
            <li className="p__opensans">
              <a  href="#home">Home</a>
            </li>
            <li className="p__opensans">
              <a href="#about">About</a>
            </li>
            <li className="p__opensans">
              <a href="#menu">Menu</a>
            </li>
            <li className="p__opensans">
              <a href="#awards">Awards</a>
            </li>
            <li className="p__opensans">
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </div>}
      </div>
    </nav>
  );
};

export default Navbar;
