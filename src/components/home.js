import React from "react";
import styles from "../styling/home.module.scss";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.faunaContainer}>
        <div className={styles.linkContainer}>
          <Link className={styles.link} to="/fauna">
            FAUNA
          </Link>
        </div>
      </div>
      <div className={styles.floraContainer}>
        <div className={styles.linkContainer}>
          <Link className={styles.link} to="/flora">
            FLORA
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
