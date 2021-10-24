import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Banner from '../components/Projects/Banner';
import NewKidsTimes from './NewKidsTimes';
import Way2Supermarket from './Way2Supermarket';
import EmotionVisualization from './emotionVisualization';
import MardiGrasParade from './mardiGrasParade';
import AboutWeb from './aboutWeb';

const projectMap = {
  theNewKidsTimes: {
    image: 'nkHeader.png',
    page: <NewKidsTimes />,
  },
  way2Supermarket: {
    image: 'way2SupermarketHeader.png',
    page: <Way2Supermarket />,
  },
  emotionVisualization: {
    page: <EmotionVisualization />,
  },
  mardiGrasParade: {
    page: <MardiGrasParade />,
  },
  about: {
    page: <AboutWeb />,
  },
};

const Blogs = () => {
  const { name } = useParams();
  const proj = {
    image: '',
    ...projectMap[name],
  };
  const history = useHistory();
  if (!projectMap[name]) {
    // history.push('/404');
    history.replace('/404');
  }
  // console.log(name);
  return (
    <div>
      {/* <Navigation /> */}
      {proj.image && <Banner image={`/images/projects/${proj.image}`} />}
      <div className="blog">
        {proj.page}
      </div>
    </div>
  );
  // return <div>{name}</div>
};

export default Blogs;
