import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h2>Hello Products page.</h2>
      <ul>
        <Link to='/product/1'>Product 1</Link>
      </ul>
    </div>
  );
};

export default Products;
