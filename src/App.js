import React, { Component } from 'react';
import './App.css';
import Weather from './weather/Weather';

class App extends Component {
    constructor() {
        super();
        this.state = {
            userLocation: '37.8267,-122.4233'
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(pos => {
            this.setState({ userLocation: pos });
        });
    }

    render() {
        return (
            <div>
                <Weather location={this.state.userLocation} />
            </div>
        );
    }
}

export default App;
