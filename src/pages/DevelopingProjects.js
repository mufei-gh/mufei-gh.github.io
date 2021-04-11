import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/developingProjects';

const Projects = () => (
  <Main
    title="DevelopingProjects"
    description="Learn about Mufei's projects."
  >
    <article className="post" id="developingprojects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Developing Projects</Link></h2>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
