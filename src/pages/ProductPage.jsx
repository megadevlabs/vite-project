import React from 'react';
import Menu from '../component/Menu';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  let { id, pname } = useParams();
  return (
    <div>
      <Menu />
      <h1>This is Product Page</h1>
      <p>Product ID: {id}</p>
      <p>Product Name: {pname}</p>
    </div>
  );
};

export default ProductPage;
