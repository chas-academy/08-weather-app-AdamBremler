import React, { Component } from 'react';
import './App.css';
import Weather from './weather/Weather';

class App extends Component {
    constructor() {
        super();
        this.state = {
            userLocation: null
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(pos => {
            this.setState({ userLocation: `${pos.coords.latitude},${pos.coords.longitude}` });
        });
    }

    render() {
        return (
            <div>
                {this.state.userLocation ?
                    <Weather location={this.state.userLocation} />
                    :
                    null
                }

                <Weather location='40.782347, -73.965911' />
                <Weather location='64.146496, -21.942555' />
            </div>
        );
    }
}

export default App;
