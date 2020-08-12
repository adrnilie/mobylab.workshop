import React from 'react';
import styles from '../styling/header.module.scss';
import logo from '../media/flower.svg';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <p>Floraria Inimii</p>
      </div>
      <div className={styles.logo}>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <div className={styles.navigation}>
        <Link className={styles.link} to='/products'>
          Produse
        </Link>
        <Button className={styles.auth}>
          <Link to='/auth'>Autentificare</Link>
        </Button>
      </div>
    </div>
  );
};
export default Header;
