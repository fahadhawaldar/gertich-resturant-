import React from "react";

import styles from "./SpecialMenu.module.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => (
  <div
    className={`${styles.special_menu} flex__center section__padding`}
    id="menu"
  >
    <div className={styles.menu_title}>
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>

    <div className={styles.menu}>
      <div className={`${styles.menu_wine} flex__center`}>
        <p className={styles.menu_heading}>Wine & Beer</p>
        <div className={styles.menu_items}>
          {data.wines.map((wine, index) => (
            <MenuItem key={index + wine.title} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>

      <div className={styles.menuimg}>
        <img src={images.menu} alt="menuimg" />
      </div>

      <div className={`${styles.menu_contails} flex__center`}>
        <p className={styles.menu_heading}>Cocktails</p>
        <div className={styles.menu_items}>
          {data.cocktails.map((coctail, index) => (
            <MenuItem key={index + coctail.title} title={coctail.title} price={coctail.price} tags={coctail.tags}/>
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        Know More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
