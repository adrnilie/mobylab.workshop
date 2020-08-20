import React, { useState } from 'react';
import styles from '../styling/header.module.scss';
import logo from '../media/flower.svg';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/auth';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import List from '../components/productList';

const Header = ({ logout, logged, cart }) => {
  const handleLogout = () => {
    logout();
  };
  const [open, setOpen] = useState(false);
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
      <div className={styles.horizontalLayout}>
        <div
          className={styles.cart}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Link to='/cart'>
            <ShoppingCartIcon className={styles.icon} />
          </Link>
          <div className={styles.cartNumber}>{cart.length}</div>
          {open && <List />}
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
    </div>
  );
};

const mapStateToProps = ({ logged, cart }) => ({ logged, cart });
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
