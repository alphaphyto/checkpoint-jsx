import React from 'react';
import product from './product';

function Price({ price }) {
  return (
    <div>
      <h5>Prix du produit : {product.price}</h5>
    </div>
  );
}

export default Price;
