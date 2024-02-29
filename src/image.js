import React from 'react';
import product from './product';

function Image({ image }) {
  return (
    <div>
      <img src={product.image} alt={product.name} />
    </div>
  );
}

export default Image;
