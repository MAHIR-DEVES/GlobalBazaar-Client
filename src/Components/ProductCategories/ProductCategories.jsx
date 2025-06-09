import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import ProductCategoriesCard from '../ProductCategorisesCard/ProductCategoriesCard';

const ProductCategories = () => {
  const location = useLocation();
  const { category } = location.state;
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/filterCategory', { params: { category } })
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [category]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full px-2 md:px-0 gap-2 md:gap-4 mt-10">
        {data?.map(dat => (
          <ProductCategoriesCard
            key={dat._id}
            dat={dat}
            category={category}
          ></ProductCategoriesCard>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
