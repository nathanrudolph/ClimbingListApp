import React, { Component } from 'react';



export class List extends Component {
    static displayName = List.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateWeatherData();
    }

    static renderForecastsTable(forecasts) {
        return (
            <div> <center>
                <h1><center> "Playlist Name" </center></h1>

                &nbsp;
                <div className="e-float-input">
                    <input classname="e-input" type="text" placeholder="Mountain Project URL" style={{ width: "500px" }} /> &nbsp;
                    <button className="btn btn-primary" >Add Route</button>
                </div>

            </center>

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
                        <tr class = 'clickable-row' data-href='url:google.com' key={forecast.date}>
                            <td><a href="mountainproject.com"></a> {forecast.date} </td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                            <td>
                                <a href="google.com">Link</a>
                            </td>
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : List.renderForecastsTable(this.state.forecasts);

        return (
            <div>

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

