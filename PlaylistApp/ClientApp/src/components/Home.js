import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <div> <center>
            <h1><center> All Playlists </center></h1>

            &nbsp;
            <div className="e-float-input">
                <input classname="e-input" type="text" placeholder="List Name" style={{ width: "500px" }} /> &nbsp;
                <button className="btn btn-primary" >New List</button>
            </div>

        </center>
        </div>
    );
  }
}
