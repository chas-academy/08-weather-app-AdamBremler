import React, { Component } from 'react';
import './App.css';
import Nav from './nav/Nav';
import Weather from './weather/Weather';
import PageContainer from './PageContainer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            userLocation: null,
            mainAlpha: 0.6,
            locationList: [
                /* '40.782347, -73.965911',
                '64.146496, -21.942555',
                '34.050985, -118.244508',
                '-41.290375, 174.775558' */
            ]
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(pos => {
            this.setState({ userLocation: `${pos.coords.latitude},${pos.coords.longitude}` });
        });
    }

    setMainAlpha = mainAlpha => {
        this.setState({ mainAlpha });
    }

    addLocation = location => {
        this.setState(prevState => ({
            locationList: [...prevState.locationList, location]
        }));
    }

    removeLocation = location => {
        this.setState(prevState => ({
            locationList: prevState.locationList.filter(l => l !== location)
        }));
    }

    render() {
        return (
            <div>
                <Nav mainAlpha={this.state.mainAlpha} addLocation={this.addLocation} />
                <PageContainer>
                    {this.state.userLocation ?
                        <Weather location={this.state.userLocation} setMainAlpha={this.setMainAlpha} remove={this.removeLocation} />
                        :
                        null
                    }
                    {this.state.locationList.map(location => (
                        <Weather location={location} remove={this.removeLocation} />
                    ))}
                </PageContainer>
            </div>
        );
    }
}

export default App;
