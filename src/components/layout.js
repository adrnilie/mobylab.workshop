import React from 'react';
import styles from '../styling/layout.module.scss';

export const Layout = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
