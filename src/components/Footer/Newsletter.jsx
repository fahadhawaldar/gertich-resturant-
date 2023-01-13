import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import styles from './Newsletter.module.css';

const Newsletter = () => (
  <div className={styles.newsletter}>
    <div className={styles.heading}>
      <SubHeading title='Newsletter' />
      <h1 className='headtext__cormorant'> Subscribe to Our Newsletter</h1>
      <p className='p__opensans'>And never miss latest Updates!</p>
    </div>

    <div className={`${styles.newsletterinput} flex__center`}>
      <input type="email" name="" id=""  placeholder='xyz@yymail.com'/>
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
