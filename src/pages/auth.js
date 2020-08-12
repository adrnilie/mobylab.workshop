import React, { useState } from 'react';
import { Layout } from '../components/layout';
import styles from '../styling/auth.module.scss';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const PAGES = {
  LOGIN: 'Autentificare',
  SIGNUP: 'Inregistrare'
};

const Auth = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setName] = useState('');
  const [page, setPage] = useState(PAGES.LOGIN);

  const handlePageChange = () => {
    if (page === PAGES.LOGIN) {
      setPage(PAGES.SIGNUP);
    } else {
      setPage(PAGES.LOGIN);
    }
  };
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.auth}>
          <div className={styles.header}>
            <p>{page}</p>
          </div>
          <div className={styles.form}>
            {page === PAGES.SIGNUP && (
              <TextField
                error={fullName === ''}
                id='outlined-error-helper-text'
                label='Numele intreg'
                placeholder='email@email.com'
                helperText='Nume invalid'
                variant='outlined'
                onChange={event => setEmail(event.target.value)}
              />
            )}
            <TextField
              error={email === ''}
              id='outlined-error-helper-text'
              label='Email'
              placeholder='email@email.com'
              helperText='Email invalid'
              variant='outlined'
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              error={password === ''}
              id='outlined-error-helper-text'
              label='Parola'
              placeholder='email@email.com'
              helperText='Parola invalida'
              variant='outlined'
              onChange={event => setPassword(event.target.value)}
            />
            <Button className={styles.submitButton}>SUBMIT</Button>
          </div>
          <p className={styles.changePage} onClick={handlePageChange}>
            {page === PAGES.SIGNUP
              ? 'Aveti deja cont? Mergeti la pagina de autentificare'
              : 'Nu aveti cont? Inregistrati-va'}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
