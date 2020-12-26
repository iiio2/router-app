import React from 'react';
import queryString from 'query-string';

const ProductDetails = (props) => {
  var result = queryString.parse(props.location.search);
  console.log(result);

  return (
    <div>
      <h4>Product Details</h4>
      <p>{props.match.params.id}</p>
      <button>Save</button>
    </div>
  );
};

export default ProductDetails;
