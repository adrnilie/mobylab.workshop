import React from 'react';
import styles from '../styling/footer.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Footer = props => {
  return (
    <div className={styles.footer}>
      <div className={styles.navigation}>
        <div className={styles.about}>
          <Link to='/about'>About</Link>
          <Link to='/about'>Contul meu</Link>{' '}
        </div>
        <div className={styles.subscribe}>
          <input placeholder='email' />
          <Button className={styles.subscribeButton}>Subscribe</Button>
        </div>
        <div className={styles.delivery}>
          <Link to='/about'>Cum cumpar</Link>
          <Link to='/about'>Unde livram</Link>
          <Link to='/about'>Retur</Link>
        </div>
      </div>
      <div className={styles.workshop}>Workshop Web 2020 @Moby Lab</div>
    </div>
  );
};
export default Footer;
