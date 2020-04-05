import React from 'react';
import Iframe from 'react-iframe';

function Apollocare(props) {
  return (
    <div className="Apollocare">      
      <div className="chat fadeInUp" style={{animationDelay: '0.2s'}}>
        <Iframe url="https://covid.apollo247.com/"
          width="360px"
          height="550px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"/>
      </div>
    </div>
  );
}

export default Apollocare;
