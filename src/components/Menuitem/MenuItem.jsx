import React from "react";

import styles from "./MenuItem.module.css";

const MenuItem = ({ title, price, tags }) => (
  <div className={styles.menuitem}>
    <div className={styles.meanuitemhead}>
      <div className={styles.menuitemname}>
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>

      <div className={styles.menuitemdash}></div>

      <div className={styles.menuitemprice}>
        <p className="p__cormorant">{price}</p>
      </div>

    </div>
      <div className={styles.menuitemsub}>
        <p className="p__opensand" style={{color: '#AAA'}}>{tags}</p>
      </div>
  </div>
);

export default MenuItem;
