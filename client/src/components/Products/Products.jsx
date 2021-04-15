/*eslint-disable*/
import React from 'react';
import Catalogue from '../Catalogue/Catalogue';
import Azza from '../Filters/Azza';
import '../../scss/containers/_Products.scss'

function Products() {

  return (
    <div className="slide-Products">
      <Azza/>
      <Catalogue />
    </div>
  );
}

export default Products;
