import React, {Component}from 'react';

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
      fetch("https://corona.lmao.ninja/countries") // data source is an object, not an array.
        .then(res => res.json()) // Short typo for response.
        .then(
          result => {
            this.setState({
              isLoaded: true,
              rates: result
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
            <td class="state">{ratesArr[key].country} <img src={ratesArr[key].countryInfo.flag} height='10' width='20' alt="flag"/></td>
            <td class="state" style={{background: 'rgb(248, 249, 250'}}>{ratesArr[key].cases}</td>
            <td class="state" >{ratesArr[key].active}</td>
            <td class="state" style={{background: 'rgb(248, 249, 250'}}>{ratesArr[key].recovered}</td>
            <td class="state">{ratesArr[key].deaths}</td>
        </tr>
        );
    }
      table.push(<tbody>{children}</tbody>); // We create the parent tbody tags and add the inner loop (children).
  
      return table;
    };
  
    render() {
      const { error, isLoaded } = this.state;
  
      if (error) {
        return <div>Oops: {error.message}</div>;
      } else if (!isLoaded) {
        return <div className="fadeInUp"><img src="/virus.gif" class="rotate" width="100" style={{display: 'block', margin:'0 auto',marginTop:'5%'}}/>
        </div>;
      } else {
        return (
          <main>
            <div className="chat" style={{marginLeft:'-4%'}}>
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
