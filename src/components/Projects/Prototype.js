import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PrototypeContainer = ({
  data, noHeader, arrowUp, arrowColor, innerstyle,
}) => {
  const total = data.length;
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className="prototype">
      {!noHeader ? <div className="goals">Prototype</div> : ''}
      <div className="prototype-container" style={innerstyle}>
        <img src={data[currentPage]} alt={`${currentPage}th page`} />
        {arrowUp ? (
          <div className="button-container">
            <div className="left-button">
              <svg
                width="23"
                height="67"
                viewBox="0 0 23 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setCurrentPage((currentPage - 1 + total) % total);
                }}
              >
                <path
                  d="M20.6136 2L2 33.5L20.6136 65"
                  stroke="#626262"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="right-button">
              <svg
                width="25"
                height="67"
                viewBox="0 0 25 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setCurrentPage((currentPage + 1) % total);
                }}
              >
                <path
                  d="M2.99965 65L21.6133 33.5L2.99965 2"
                  stroke="#626262"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div className="button-container-down">
            <div className="left-button">
              <svg
                width="64"
                height="38"
                viewBox="0 0 64 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setCurrentPage((currentPage - 1 + total) % total);
                }}
              >
                <path
                  d="M1.23225 17.2322C0.255943 18.2085 0.255943 19.7915 1.23225 20.7678L17.1422 36.6777C18.1185 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53555 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.34602 18.1185 0.34602 17.1422 1.32233L1.23225 17.2322ZM63.1223 16.5L3.00002 16.5L3.00002 21.5L63.1223 21.5L63.1223 16.5Z"
                  fill={arrowColor || '#F9F6DB'}
                />
              </svg>
            </div>
            <div className="right-button">
              <svg
                width="64"
                height="38"
                viewBox="0 0 64 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setCurrentPage((currentPage + 1) % total);
                }}
              >
                <path
                  d="M62.7682 20.7678C63.7445 19.7915 63.7445 18.2085 62.7682 17.2322L46.8583 1.32233C45.882 0.34602 44.2991 0.34602 43.3228 1.32233C42.3465 2.29864 42.3465 3.88155 43.3228 4.85786L57.4649 19L43.3228 33.1421C42.3465 34.1184 42.3465 35.7014 43.3228 36.6777C44.2991 37.654 45.882 37.654 46.8583 36.6777L62.7682 20.7678ZM0.878174 21.5H61.0005V16.5H0.878174V21.5Z"
                  fill={arrowColor || '#F9F6DB'}
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

PrototypeContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  noHeader: PropTypes.bool,
  arrowUp: PropTypes.bool,
  arrowColor: PropTypes.string,
  innerstyle: PropTypes.objectOf(PropTypes.string),
};

PrototypeContainer.defaultProps = {
  noHeader: false,
  arrowUp: true,
  arrowColor: '',
  innerstyle: {},
};

export default PrototypeContainer;
