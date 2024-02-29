import React from 'react';
import product from './product';

function Name({ name }) {
  return (
    <div>
      <h2>Nom du produit : {product.name}</h2>
    </div>
  );
}

export default Name;
