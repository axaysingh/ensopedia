import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// import * as Icon from 'react-feather';

import './App.scss';

import Home from './components/home';
import Navbar from './components/navbar';
import Links from './components/links';
// import Cluster from './components/cluster';
import Apollocare from './components/apollocare';
import Banner from './components/banner';
// import Patientdb from './components/patientdb';
import World from './components/world';
import Footer from './components/footer';

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

      <div>
      <Router history={history}>
        <Route
          render={({location}) => (
            <div className="Almighty-Router">
              <div class="bottom">
              <h5>Stay Home | Stay Safe | Stay Healthy | Stay Lives<br/><br/><span class="link"><a>Ensopedia</a></span></h5>
              </div>
              <Footer/>
            </div>
          )}
        />
      </Router>
      </div>
    </div>
  );
}

export default App;
