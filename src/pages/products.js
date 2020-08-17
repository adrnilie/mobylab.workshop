import React, { useEffect } from 'react';
import { CustomCard } from '../components/card';
import { connect } from 'react-redux';
import { updateProducts } from '../redux/actions/products';
import axios from '../axios';
import styled from 'styled-components';
import { FormAdd } from '../components/form-add';

const Container = styled.div`
  margin: 40px 10vw;

  display: flex;
  flex-direction: column;

  min-height: 80vh;
`;

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Products = props => {
  const { products, update } = props;

  useEffect(() => {
    console.log(products);
    if (products && products.length === 0) {
      axios.get('/products').then(({ data }) => update(data));
    }
  }, []);

  return (
    <Container>
      <FormAdd {...props} />
      <List>
        {products &&
          products.length > 0 &&
          products.map((product, index) => (
            <CustomCard product={product} key={index} />
          ))}
      </List>
    </Container>
  );
};

const mapStateToProps = ({ products }) => ({ products });
const mapDispatchToDispatch = dispatch => ({
  update: data => dispatch(updateProducts(data))
});
export default connect(mapStateToProps, mapDispatchToDispatch)(Products);
