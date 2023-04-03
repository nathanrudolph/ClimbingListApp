import React, { Component } from 'react';

export class Counter extends Component {


    render() {

 

      return (
          <div> <center>
        <h1><center> "Playlist Name" </center></h1>

              &nbsp; 
            <div className="e-float-input">
                  <input classname="e-input" type="text" placeholder="Mountain Project URL" style={{ width: "500px" }} /> &nbsp; 
                  <button className="btn btn-primary" >Add Route</button>
                        
                  <p>Armatron</p>

            </div>


          </center>
      </div>
    );
  }
}
export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(forecasts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Route</th>
                        <th>Grade</th>
                        <th>Type</th>
                        <th>Pitches</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.forecasts);

        return (
            <div>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}

