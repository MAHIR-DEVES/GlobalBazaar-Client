import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router';
import Cards from '../../Components/Cards/Cards';

const AllProduct = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full px-2 md:px-0 gap-2 md:gap-4 ">
        {products.map(product => (
          <Cards product={product} key={product._id}></Cards>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
