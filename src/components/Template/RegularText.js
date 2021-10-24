import React from 'react';
import PropTypes from 'prop-types';

// const RegularText = ({ text }) => (
// <p className="regular-text">{text}</p>
// );

const RegularText = (props) => <p className={`regular-text ${props.className}`}>{props.children}</p>;

RegularText.propTypes = {
  // text: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.arrayOf(PropTypes.string.isRequired, null).isRequired,
};

export default RegularText;
