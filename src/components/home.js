import React from 'react';
import styles from '../styling/home.module.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.faunaContainer}>
        <div className={styles.text}>
          <Link to='/fauna'>Fauna</Link>
        </div>
      </div>
      <div className={styles.floraContainer}>
        <div className={styles.text}>
          <Link to='/flora'>Flora</Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
