import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">Welcome to my website!</h2>
        </div>
      </header>
      <p>Please feel free to check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        and <Link to="/design">projects</Link>. {' '}
      </p>
    </article>
  </Main>
);

export default Index;
