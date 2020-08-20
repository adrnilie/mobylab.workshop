import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import List from '../components/productList';

const Container = styled.div`
  margin: 40px 10vw;

  display: flex;
  flex-direction: column;

  min-height: 80vh;
`;

const Cart = props => {
  const { cart } = props;
  return (
    <Container>
      <h2>
        Aveti {cart.length} {cart.length === 1 ? 'produs' : 'produse'} in cos.
      </h2>
      <List fullPage={true} width={'100%'} height={'100%'} />
    </Container>
  );
};

const mapStateToProps = ({ cart }) => ({ cart });
export default connect(mapStateToProps, null)(Cart);
