import React, { useState } from 'react';
import { Layout } from '../components/layout';
import styles from '../styling/auth.module.scss';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { openNotification, NOTIFICATION_TYPES } from '../notification.js';
import axios from '../axios';
import { connect } from 'react-redux';
import { login } from '../redux/actions/auth';
import { Redirect } from 'react-router-dom';
const PAGES = {
  LOGIN: 'Autentificare',
  SIGNUP: 'Inregistrare'
};

const Auth = ({ login, logged }) => {
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

  const submit = () => {
    axios.get('/users').then(({ data }) => {
      if (page === PAGES.LOGIN) {
        const user = data.length > 0 && data.find(u => u.email === email);
        if (user) {
          login();
          return openNotification(
            'Succes',
            'Ai fost autentificat cu succes',
            NOTIFICATION_TYPES.SUCCESS
          );
        } else {
          setPage(PAGES.SIGNUP);
          return openNotification(
            'Eroare',
            'Acest utilizator nu exista',
            NOTIFICATION_TYPES.ERROR
          );
        }
      } else {
        const user = data.length > 0 && data.find(u => u.email === email);
        if (user) {
          return openNotification(
            'Eroare',
            'Exista deja un cont cu credentialele acestea',
            NOTIFICATION_TYPES.ERROR
          );
        } else {
          axios.post('/users', { email, password, fullName }).then(() => {
            setPage(PAGES.LOGIN);
            return openNotification(
              'Succes',
              'Te poti autentifica',
              NOTIFICATION_TYPES.SUCCESS
            );
          });
        }
      }
    });
  };
  if (logged) {
    return <Redirect to='/' />;
  }
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
                onChange={event => setName(event.target.value)}
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
            <Button onClick={submit} className={styles.submitButton}>
              SUBMIT
            </Button>
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
const mapStateToProps = ({ logged }) => ({ logged });
const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login())
});
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
