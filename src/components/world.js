import React, {Component}from 'react';
import * as Icon from 'react-feather';
import moment from 'moment';

class World extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        rates: {}
      };
    }
  
    componentDidMount() {      
      fetch("https://corona.lmao.ninja/v2/countries") // data source is an object, not an array.
        .then(res => res.json()) // Short typo for response.
        .then(          
          result => {
            this.setState({
              isLoaded: true,
              rates: result,
              lastUpdated : result[0].updated
            });          
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    }
  
  
    createTable = () => {
      const rates = this.state;
      let ratesArr = Object.keys(rates).map(i => rates[i])[2];             
      let table = [];
      let children = [];
    for (var key in ratesArr) {
        children.push(
        <tr style={{textTransform:'uppercase'}}>
            {/* <td><img src={ratesArr[key].countryInfo.flag} height='20' width='25' alt="flag"/></td> */}
            <td class="state">
              {ratesArr[key].country} <img src={ratesArr[key].countryInfo.flag} height='10' width='20' alt="flag"/>
            </td>
            <td class="state" style={{background: 'rgb(248, 249, 250'}}>
              <span className="deltas" style={{color: '#ffc107'}}>
                {ratesArr[key].todayCases > 0 && <Icon.ArrowUp />}
                {ratesArr[key].todayCases > 0 ? `${ratesArr[key].todayCases}` : ''}
              </span>
              {ratesArr[key].cases}
            </td>
            <td class="state" >
              {ratesArr[key].active}
            </td>
            <td class="state" style={{background: 'rgb(248, 249, 250'}}>              
              {ratesArr[key].recovered}
            </td>
            <td class="state">
              <span className="deltas" style={{color: '#ff073a'}}>
                {ratesArr[key].todayDeaths > 0 && <Icon.ArrowUp />}
                {ratesArr[key].todayDeaths > 0 ? `${ratesArr[key].todayDeaths}` : ''}
              </span>
              {ratesArr[key].deaths}
            </td>
        </tr>
        );
    }
      table.push(<tbody>{children}</tbody>); // We create the parent tbody tags and add the inner loop (children).
  
      return table;
    };
  
    render() {
      const { error, isLoaded, lastUpdated } = this.state;
            
      if (error) {
        return <div>Oops: {error.message}</div>;
      } else if (!isLoaded) {
        return <div className="fadeInUp"><img src="/virus.gif" class="rotate" width="100" style={{display: 'block', margin:'0 auto',marginTop:'5%'}}/>
        </div>;
      } else {
        let timez= moment(lastUpdated)._d;
        let formatedTime = moment(timez).format('ddd,D MMMM YYYY, h:mm:ss A Z');
        
        return (         
          <main>            
            <div className="chat" style={{marginLeft:'-4%',marginBottom:'-2%'}}> 
                <div className="header fadeInUp" style={{animationDelay: '0.5s',paddingTop:'0.5rem',marginLeft:'1rem'}}>
                  <div className="header-mid">
                    <div className="titles">
                      <h1>World COVID-19 Pandemic Tracker</h1>
                      <h6 style={{fontWeight: 600}}>A Crowdsourced Initiative</h6>
                    </div>
                    <div className="last-update" style={{marginRight:'-1rem'}}>
                      <h6>Last Updated</h6>                      
                      <h6 style={{color: '#28a745', fontWeight: 600}}>{formatedTime.toString()}</h6>
                    </div>
                  </div>
                </div>         
              <table style={{margin:'0 auto'}}>
                <thead>
                  <tr>
                    {/* <th>Flag</th> */}
                    <th className="sticky">
                      <abbr
                        className={`${window.innerWidth <= 769 ? 'is-grey' : ''}`}
                        title="Country"
                      >
                        {window.innerWidth <= 769
                          ? window.innerWidth <= 375
                            ? 'Country'
                            : 'Country'
                          : 'Country'}
                      </abbr>
                    </th>
                    <th className="sticky">
                      <abbr
                        className={`${window.innerWidth <= 769 ? 'is-yellow' : ''}`}
                        title="Confirm"
                      >
                        {window.innerWidth <= 769
                          ? window.innerWidth <= 375
                            ? 'C'
                            : 'Confirm'
                          : 'Confirmed'}
                      </abbr>
                    </th>                    
                    <th className="sticky">
                      <abbr
                        className={`${window.innerWidth <= 769 ? 'is-blue' : ''}`}
                        title="Active"
                      >
                        {window.innerWidth <= 769
                          ? window.innerWidth <= 375
                            ? 'A'
                            : 'Active'
                          : 'Active'}
                      </abbr>
                    </th>
                    <th className="sticky">
                      <abbr
                        className={`${window.innerWidth <= 769 ? 'is-green' : ''}`}
                        title="Recover"
                      >
                        {window.innerWidth <= 769
                          ? window.innerWidth <= 375
                            ? 'R'
                            : 'Recover'
                          : 'Recovered'}
                      </abbr>
                    </th>
                    <th className="sticky">
                    <abbr
                      className={`${window.innerWidth <= 769 ? 'is-cherry' : ''}`}
                      title="Death"
                    >
                      {window.innerWidth <= 769
                        ? window.innerWidth <= 375
                          ? 'D'
                          : 'Death'
                        : 'Deaths'}
                    </abbr>
                    </th>
                  </tr>
                </thead>
                {this.createTable()}
              </table>
            </div> 
          </main>
        );
      }
    }
  }

export default World;
