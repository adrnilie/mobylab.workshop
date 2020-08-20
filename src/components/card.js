import React from 'react';
import {
  CardContent,
  Card,
  CardActions,
  CardActionArea
} from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import styled from 'styled-components';
import { addProduct } from '../redux/actions/cart';
import { connect } from 'react-redux';

const MyCard = styled(Card)`
  width: 200px;
  height: 150px;

  margin: 10px;
`;

const CustomCard = ({ product, add }) => {
  return (
    <MyCard>
      <CardActionArea>
        <CardContent>
          <p>{product.name}</p>
          <p>{product.price} RON</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ShoppingBasketIcon
          onClick={() => add(product)}
          style={{ cursor: 'pointer' }}
        />
      </CardActions>
    </MyCard>
  );
};

const mapDispatchToProps = dispatch => ({
  add: product => dispatch(addProduct(product))
});

export default connect(null, mapDispatchToProps)(CustomCard);
