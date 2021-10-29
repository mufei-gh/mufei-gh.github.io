import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => {
  const location = useLocation();
  return (
    <header id="header">
      <h1 className="index-link">
        <img src="/images/projects/logo.png" alt="logo" className="logo" />
        {routes
          .filter((l) => l.index)
          .map((l) => (
            <Link key={l.label} to={l.path}>
              {l.label}
            </Link>
          ))}
      </h1>
      <nav className="links">
        <ul>
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <li key={l.label} style={{ fontWeight: location.pathname === l.path ? 700 : 500 }}>
                <Link to={l.path}>{l.label}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <Hamburger />
    </header>
  );
};

export default Navigation;
