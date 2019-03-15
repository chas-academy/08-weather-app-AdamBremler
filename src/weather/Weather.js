import React, { useState, useEffect } from 'react';
import useWeather from '../hooks/useWeather';
import useReverseGeo from '../hooks/useReverseGeo';
import moment from 'moment-timezone';
import WeatherContainer from './WeatherContainer';
import WeatherCard from './WeatherCard';
import WeatherHeader from './WeatherHeader';
import WeatherBody from './WeatherBody';
import WeatherIcon from './WeatherIcon';
import WeatherIconContainer from './WeatherIconContainer';

export default function Weather(props) {
    const [location, setLocation] = useState(props.location);

    const weatherData = useWeather(location);
    const geoData = useReverseGeo(location);

    useEffect(() => {
        setLocation(props.location);
    }, [props.location]);

    if (weatherData && geoData) {
        let { time, temperature, windSpeed, humidity, icon } = weatherData.currently;

        temperature = Math.round(temperature);
        time = moment.tz(time * 1000, weatherData.timezone);

        const timeString = time.format('h:mmA');

        const timeHours = time.format('k');
        const timeAlpha = (timeHours < 12 ? timeHours : Math.abs(24 - timeHours)) / 12;

        return (
            <WeatherContainer>
                <WeatherCard alpha={timeAlpha}>
                    <WeatherBody>
                        {
                            geoData.address.city ||
                            geoData.address.name ||
                            geoData.address.suburb ||
                            geoData.address.state ||
                            geoData.address.country
                        }
                    </WeatherBody>
                    <WeatherHeader>
                        {temperature}°
                    </WeatherHeader>
                    <WeatherBody>
                        {timeString}
                    </WeatherBody>
                    <WeatherIconContainer>
                        <WeatherIcon icon={icon} />
                    </WeatherIconContainer>
                </WeatherCard>
            </WeatherContainer>
        )
    }

    else {
        return (
            <div>Loading...</div>
        )
    }
}
