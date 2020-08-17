import React from 'react';
import {
  CardContent,
  Card,
  CardActions,
  CardActionArea
} from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import styled from 'styled-components';

const MyCard = styled(Card)`
  width: 200px;
  height: 150px;

  margin: 10px;
`;

export const CustomCard = product => {
  return (
    <MyCard>
      <CardActionArea>
        <CardContent>
          <p>{product.product.name}</p>
          <p>{product.product.price} RON</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ShoppingBasketIcon />
      </CardActions>
    </MyCard>
  );
};
