import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Mufei Chen</h2>
        <p><a href="mailto:mufei@umich.edu">mufei@umich.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mufei, a student @U of Michigan.
        I think engineering and art are beautiful things with
        the creative process.
        Fun fact: I handdrew this head pic!
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/" className="button">Home Page</Link>}
        </li>
      </ul>
    </section>
  </section>
);

export default SideBar;
