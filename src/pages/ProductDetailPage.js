import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  let { id } = useParams();

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Details for Product ID: {id}</p>
    </div>
  );
}

export default ProductDetailPage; 