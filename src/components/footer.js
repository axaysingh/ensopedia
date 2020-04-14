import React from 'react';
import * as Icon from 'react-feather';
import '../App.scss';


function Footer(props) {

  //New footer component added
  if (window.location.pathname !== '/summary') {
    return (

      <footer class="footer-content ">

        <div>
        <div class="tooltip">
          <a
            className="button github"
            href="https://rebrand.ly/h4dzvs2"
            target="_blank"
            rel="noopener noreferrer"
            style={{justifyContent: 'center'}}
          >
          <Icon.Download/>
          <span class="tooltiptext">Download Application</span>
          </a>
        </div>
        <div class="tooltip">
          <a
            className="button twitter"
            href="https://twitter.com/ensopedia"
            target="_blank"
            rel="noopener noreferrer"
            style={{justifyContent: 'center'}}
          >
          <Icon.Twitter />
          <span class="tooltiptext">Connect on Twitter</span>

          </a>
        </div>
        <div class="tooltip">
          <a
          href="https://facebook.com/ensopedia"
          className="button telegram"
          target="_blank"
          rel="noopener noreferrer"
          >
            <Icon.Facebook />
            <span class="tooltiptext">Connect on Facebook</span>
          </a>
        </div>
        </div>
      </footer>
    );
  } 
  else {
    return <div></div>;
  }
}

export default Footer;