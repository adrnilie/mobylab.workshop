import React, { useState } from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import styled from 'styled-components';
import { openNotification, NOTIFICATION_TYPES } from '../notification';
import axios from '../axios';

const Form = styled(Paper)`
  width: 200px;
  height: 200px;

  margin: 10px;

  display: flex;
  flex-direction: column;
  alignitems: center;
  justifycontent: center;
`;

const Input = styled(TextField)`
  margin: 10px;
`;

const CustomButton = styled(Button)`
  background: #ed7b84;
  margin: 10px;
  color: white;
  &:hover {
    background: #ed7b84;
  }
`;

export const FormAdd = props => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const handleAdd = () => {
    if (name === '' || price === '') {
      return openNotification(
        'Eroare',
        'Iti lipsesc campuri',
        NOTIFICATION_TYPES.ERROR
      );
    } else {
      axios.post('/products', { name, price }).then(() => {
        axios.get('/products').then(({ data }) => {
          props.update(data);
          setName('');
          setPrice('');
        });
      });
    }
  };
  return (
    <Form elevation={2}>
      <Input
        label='Name'
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <Input
        label='Price'
        type='number'
        value={price}
        onChange={event => setPrice(event.target.value)}
      />
      <CustomButton onClick={handleAdd}>Adauga</CustomButton>
    </Form>
  );
};
