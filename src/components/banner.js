import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

function Banner(props) {
  const [tcase, totalCase] = useState('');
  const [death, totalDeath] = useState('');
  const [active, totalActive] = useState('');
  const [recover, totalRecover] = useState('');
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (fetched === false) {
      getStates();
    }
  }, 10000, [fetched]);

  const getStates = () =>{
    axios
      .get('https://api.thevirustracker.com/free-api?global=stats')
      .then((response) => {      
        totalCase(response.data.results[0].total_cases);
        totalDeath(response.data.results[0].total_deaths);
        totalActive(response.data.results[0].total_active_cases);
        totalRecover(response.data.results[0].total_recovered);
        setFetched(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (    
    <div
      onClick={() => setFetched()}
      className="Banner fadeInUp"
      style={{animationDelay: '0.2s'}}
    >
      <div className="snippet">
        <span style={{color:'#ffc107',animationDelay: '0.2s'}}>WORLD Count
          <h2>{tcase}</h2>  
        </span>
        <span style={{color:'#007bff',animationDelay: '0.3s'}}>Active Live
          <h2 >{active}</h2>  
        </span>
        <span style={{color:'#28a745',animationDelay: '0.4s'}}>Recovered
          <h2>{recover}</h2>  
        </span>
        <span style={{color:'#ff073a',animationDelay: '0.5s'}}>Deceased
          <h2>{death}</h2>  
        </span>
      </div>
    </div>
  );
}

export default Banner;
