import React from 'react';
import styles from '../styling/header.module.scss';
import logo from '../media/flower.svg';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/auth';

const Header = ({ logout, logged }) => {
  const handleLogout = () => {
    logout();
  };

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
        {!logged && (
          <Button className={styles.auth}>
            <Link to='/auth'>Autentificare</Link>
          </Button>
        )}
        {logged && (
          <Button className={styles.auth} onClick={handleLogout}>
            Iesire
          </Button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ logged }) => ({ logged });
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
