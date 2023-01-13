import React from 'react';

import styles from './FooterOverlay.module.css';

const FooterOverlay = () => (
  <div className={styles.footeroverlay}>
    <div className={styles.black}></div>
    <div className={`${styles.img} app__bg`}></div>
    
  </div>
);

export default FooterOverlay;
