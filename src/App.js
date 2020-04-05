import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as Icon from 'react-feather';

import './App.scss';

import Home from './components/home';
import Navbar from './components/navbar';
import Links from './components/links';
// import Cluster from './components/cluster';
import Apollocare from './components/apollocare';
import Banner from './components/banner';
// import Patientdb from './components/patientdb';

const history = require('history').createBrowserHistory;

function App() {
  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'COVID19',
      animationDelayForNavbar: 0.2,
    },
    // {
    //   pageLink: '/patientdb',
    //   view: Patientdb,
    //   displayName: 'Patients DB',
    //   animationDelayForNavbar: 0.3,
    // },
    // {
    //   pageLink: '/clusters',
    //   view: Cluster,
    //   displayName: 'Clusters',
    //   animationDelayForNavbar: 0.4,
    // },    
    {
      pageLink: '/apollocare',
      view: Apollocare,
      displayName: 'Apollocare',
      animationDelayForNavbar: 0.6,
    },
    {
      pageLink: '/links',
      view: Links,
      displayName: 'Helpful Links',
      animationDelayForNavbar: 0.5,
    },
    {
      pageLink: '/covid19',
      view: Home,
      animationDelayForNavbar: 0.2,
    }    
  ];

  return (
    <div className="App">
      <Router history={history}>
        <Route
          render={({location}) => (
            <div className="Almighty-Router">
              <Navbar pages={pages} />
              <Banner />
              <Route exact path="/" render={() => <Redirect to="/" />} />
              <Switch location={location}>
                {pages.map((page, i) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      component={page.view}
                      key={i}
                    />
                  );
                })}
              </Switch>
            </div>
          )}
        />
      </Router>

      <footer className="fadeInUp" style={{animationDelay: '2s'}}>
        {/* <img
          src="/icon.png"
          alt="https://www.ensopedia.com | Coronavirus cases live dashboard"
        />*/}

        <h5>Stay Home | Stay Safe | Stay Healthy | Stay Lives</h5>
        <h4>By - Ensopedia</h4>
        <a
          href="https://twitter.com/ensopedia"
          target="_noblank"
          className="button twitter"
          style={{justifyContent: 'center'}}
        >
          <Icon.Twitter />
          <span>Connect on Twitter</span>
        </a>
        <a
          href="https://facebook.com/ensopedia"
          className="button facebook"
          target="_noblank"
        >
          <Icon.Facebook />
          <span>Connect on Facebook!</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
