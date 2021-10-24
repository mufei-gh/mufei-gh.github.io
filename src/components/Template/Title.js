import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => <div className={`title ${props.className}`}>{props.children}</div>;

Title.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: '',
};

export default Title;
