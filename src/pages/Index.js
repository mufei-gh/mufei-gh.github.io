import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import Main from '../layouts/Main';

const imageBaseUrl = '/images/projects/';
const Index = () => {
  const location = useLocation();
  const history = useHistory();
  if (location.pathname === '/') {
    history.replace('work');
  }
  return (
    <Main fullPage>
      <div className="post-container">
        <Link to="/work/theNewKidsTimes">
          <div className="post-container-slider">
            <img className="upper" src={`${imageBaseUrl}newKidsTimePosts.png`} alt="ad" />
            <img className="lower" src={`${imageBaseUrl}newKidsTimesPostText.png`} alt="ad" />
          </div>
        </Link>
        <Link to="/work/way2Supermarket">
          <div className="post-container-slider">
            <img className="upper" src={`${imageBaseUrl}way2Posts.png`} alt="ad" />
            <img className="lower" src={`${imageBaseUrl}way2PostText.png`} alt="ad" />
          </div>
        </Link>
        <Link to="/work/emotionVisualization">
          <div className="post-container-slider">
            <img className="upper" src={`${imageBaseUrl}emoPosts.png`} alt="ad" />
            <img className="lower" src={`${imageBaseUrl}emoPostText.png`} alt="ad" />
          </div>
        </Link>
        <Link to="/work/mardiGrasParade">
          <div className="post-container-slider">
            <img className="upper" src={`${imageBaseUrl}marPosts.png`} alt="ad" />
            <img className="lower" src={`${imageBaseUrl}marPostText.png`} alt="ad" />
          </div>
        </Link>
      </div>
    </Main>
  );
};

export default Index;
