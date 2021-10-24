import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ image }) => (
  <div className="banner-container">
    <img className="banner-image" src={`${process.env.PUBLIC_URL + image}`} alt={image} />
  </div>
);

Banner.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Banner;
