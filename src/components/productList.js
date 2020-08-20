import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const CustomList = styled.div`
  height: ${props => (props.height ? props.height : '250px')};
  width: ${props => (props.width ? props.width : '300px')};
  color: black;
  background: ${props => (props.fullPage ? 'white' : '#f2f2f2')};

  display: flex;
  justify-content: start-flex;
  align-items: center;
  flex-direction: column;

  position: ${props => (props.fullPage ? 'unset' : 'absolute')};
  bottom: -250px;
  left: -150px;

  border-radius: 10px;

  box-shadow: ${props =>
    props.fullPage ? 'none' : '0 0 10px 3px rgba(0, 0, 0, 0.1)'};

  p {
    font-size: 1.5em;
    padding: 4px;
  }

  overflow: auto;
`;

const Elem = styled.div`
  width: 80%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  background: #f5dbcb;

  margin: 0 0 3px 0;

  p {
    margin: 0;
  }
`;

const List = props => {
  const { cart } = props;
  console.log(cart);
  return (
    <CustomList {...props}>
      <p>Produsele tale</p>
      {cart &&
        cart.length > 0 &&
        cart.map((elem, index) => (
          <Elem key={index}>
            <p>{elem.name}</p> - <p>{elem.price}</p> RON
          </Elem>
        ))}
    </CustomList>
  );
};

const mapStateToProps = ({ cart }) => ({ cart });
export default connect(mapStateToProps, null)(List);
