import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss';
import NewKidsTimes from './pages/NewKidsTimes';
import AboutWeb from './pages/aboutWeb';

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const DevelopingProjects = lazy(() => import('./pages/DevelopingProjects'));
const Blog = lazy(() => import('./pages/blog'));

const App = () => (
  // const location = useLocation();
  // if (location.pathname === '/') history.replace('/work');

  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/work" component={Index} />
        <Route path="/design" component={Projects} />
        <Route path="/work/:name" component={Blog} />
        <Route path="/about" component={AboutWeb} />
        <Route path="/developing" component={DevelopingProjects} />
        <Route path="/resume" component={Resume} />
        <Route path="/newkidstimes" component={NewKidsTimes} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default App;
