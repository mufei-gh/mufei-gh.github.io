import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BackToPortfolio = (props) => (
  <Link to="/work" className="full-width no-margin">
    <div
      className="full-width text-center no-margin flex-center back-to-portfolio"
      style={{ background: props.background, color: props.color, height: '3.54em' }}
    >
      {props.children}
    </div>
  </Link>
);

BackToPortfolio.propTypes = {
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default BackToPortfolio;
