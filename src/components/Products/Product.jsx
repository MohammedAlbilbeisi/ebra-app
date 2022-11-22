import React from 'react';
import './Product.css';
import { Container, Row, Col } from 'react-bootstrap';
import Data from '../../Data';





const Product = () => {

  const ProductItem = Data.Products.map((item) => {
    return (
      <Col  className="product-item" key={Math.random()}>

        <img src={item.img} className='img-fluid' />
        <h3>{item.IconText}</h3>
        <p>{item.description} </p>
        <h6>{item.price}</h6>
        <button>Add to cart</button>
      </Col>

    );
  })


  return (
    <Container className='Product'>
      <h1>New Proudacts</h1>
      <Row>
        {ProductItem}
      </Row>


    </Container>
  );




}

export default Product;