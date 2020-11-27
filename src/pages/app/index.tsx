import React from 'react';
import css from './index.module.less';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import loadable from '@loadable/component';

import Loading from '@/components/loading';

import { LayoutMain, LayoutBlank } from '@/layout';

const Home = loadable(() => import('@/pages/home'), {
  fallback: <Loading />
});

const About = loadable(() => import('@/pages/about'), {
  fallback: <Loading />
});

const PersonCenter = loadable(() => import('@/pages/person-center'), {
  fallback: <Loading />
});

const App = () => {
  return (
    <div className={css['app']}>
      <Router>
        <Switch>
          <Route
            path="/"
            render={(props) => (
              <LayoutBlank {...props}>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
              </LayoutBlank>
            )}
          />
          <Route
            path="/admin"
            render={(props) => (
              <LayoutMain {...props}>
                <Switch>
                  <Route path="/admin/person-center" component={PersonCenter} />
                </Switch>
              </LayoutMain>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
