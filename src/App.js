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
import World from './components/world';

const history = require('history').createBrowserHistory;

function App() {
  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'India',
      animationDelayForNavbar: 0.2,
    },
    {
      pageLink: '/world',
      view: World,
      displayName: 'World',
      animationDelayForNavbar: 0.5,
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
      displayName: 'Links',
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
        <h4>- Ensopedia</h4>
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
          className="button telegram"
          target="_noblank"
          style={{justifyContent: 'center'}}
        >
          <Icon.Facebook />
          <span>Connect on Facebook</span>
        </a>
        <a
          href="https://rebrand.ly/h4dzvs2"
          className="button github"
          target="_noblank"
          style={{justifyContent: 'center'}}
        >
          <Icon.Download/>
          <span>Download Application</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
