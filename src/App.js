import React, { Component } from 'react';
import './App.css';
import Weather from './weather/Weather';
import PageContainer from './PageContainer';

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
            <PageContainer>
                {this.state.userLocation ?
                    <Weather location={this.state.userLocation} />
                    :
                    null
                }

                {/* <Weather location='40.782347, -73.965911' />
                <Weather location='64.146496, -21.942555' />
                <Weather location='34.050985, -118.244508' /> */}
            </PageContainer>
        );
    }
}

export default App;
