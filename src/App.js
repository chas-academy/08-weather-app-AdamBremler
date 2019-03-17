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
            ],
            searchInputError: '',
            isSiUnits: true
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
        if (!this.state.locationList.includes(location)) {
            this.setState(prevState => ({
                locationList: [...prevState.locationList, location]
            }));
        }

        else {
            this.setSearchInputError('You have already added that location');
        }
    }

    removeLocation = location => {
        this.setState(prevState => ({
            locationList: prevState.locationList.filter(l => l !== location)
        }));
    }

    setSearchInputError = message => {
        this.setState({
            searchInputError: message
        });
    }

    setSiUnits = value => {
        this.setState({
            isSiUnits: value
        });
    }

    render() {
        return (
            <div>
                <Nav
                    mainAlpha={this.state.mainAlpha}
                    addLocation={this.addLocation}
                    searchInputError={this.state.searchInputError}
                    setSearchInputError={this.setSearchInputError}
                    isSiUnits={this.state.isSiUnits}
                    setSiUnits={this.setSiUnits}
                    locationList={this.state.locationList}
                />
                <PageContainer>
                    {this.state.userLocation ?
                        <Weather
                            key={this.state.userLocation}
                            location={this.state.userLocation}
                            setMainAlpha={this.setMainAlpha}
                            remove={this.removeLocation}
                            isSiUnits={this.state.isSiUnits}
                        />
                        :
                        null
                    }
                    {this.state.locationList.map(location => (
                        <Weather
                            key={location}
                            location={location}
                            remove={this.removeLocation}
                            isSiUnits={this.state.isSiUnits}
                            removeAble
                        />
                    ))}
                </PageContainer>
            </div>
        );
    }
}

export default App;
