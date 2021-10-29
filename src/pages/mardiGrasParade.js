import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import RegularText from '../components/Template/RegularText';
import Title from '../components/Template/Title';
import BackToPortfolio from '../components/Projects/BackToPortfolio';

// const handleEvent = (e) => {
//   console.info('info', e);
//   // eslint-disable-next-line no-alert
//   alert(123);
// };

const RegTextPurple = (props) => <div className="color-purple">{props.children}</div>;

RegTextPurple.propTypes = {
  children: PropTypes.string.isRequired,
};
const MardiGrasParade = () => (
  <div className="full-width mardiGrasParade flex-center">
    <div className="full-width no-margin arrow-container">
      <Link className="arrow-icon" to="/work">
        <svg
          width="64"
          height="38"
          viewBox="0 0 64 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <path
            d="M1.23223 17.2322C0.255922 18.2085 0.255922 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.34602 18.1184 0.34602 17.1421 1.32233L1.23223 17.2322ZM64 16.5L3 16.5V21.5L64 21.5V16.5Z"
            fill="#481074"
          />
        </svg>
      </Link>
    </div>
    <div className="blog-container">
      <div className="titleName">Mardi Gras Parade</div>
      <div className="subtitle">Game Design and Development</div>
      <Title>Introduction</Title>
      <RegularText>
        Mardi gras parade is a simple collection game. Initially, it was one of my course projects,
        modified later with inspirations of the mardi gras parade in New Orleans.
      </RegularText>
      <Title className="play">Play and Have Fun</Title>
      <iframe src="https://mufei-projects.github.io/" title="Game" style={{ width: '900px', height: '610px' }} />
      {/* <img src="/images/projects/MardiGrasParade.png" className="MGPPic" alt=" " /> */}
      <Title>Coding</Title>
      <RegularText className="lastLine">Feel free to check my code{' '}
        <a className="link" href="https://github.com/mufei-gh/mardiGP">here.</a>
      </RegularText>
    </div>
    <BackToPortfolio color="white" background="#481074">
      Back to Portfolio
    </BackToPortfolio>
  </div>
);

export default MardiGrasParade;
