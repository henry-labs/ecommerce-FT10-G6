/* eslint-disable  */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../scss/components/_productCard.scss';

function ProductCard(props) {
  const {
    data: {
      name,
      author,
      preview,
      id,
    },
  } = props;

  return (
    <>
      <Link className="link" to={`/product/${id}`}>
        <div className="product-card">
          <img src={preview} alt="" />
          <h4>{name}</h4>
          <h6>{author.name}</h6>
        </div>
      </Link>
    </>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    preview: PropTypes.string,
    author: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductCard;
