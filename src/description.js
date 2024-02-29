import React from 'react';
import product from './product';

function Description({ description }) {
  return (
    <div>
      <h6>Description du produit : {product.description}</h6>
    </div>
  );
}

export default Description;
