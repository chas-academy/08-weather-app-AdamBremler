import React, { useState } from 'react';
import useWeather from '../hooks/useWeather';
import moment from 'moment';
import WeatherCard from './WeatherCard';
import WeatherHeader from './WeatherHeader';
import WeatherBody from './WeatherBody';

export default function Weather(props) {
    const [location, setLocation] = useState(props.location);
    const weatherData = useWeather(location);

    console.log(weatherData);

    if (weatherData) {
        let { time, temperature, windSpeed, humidity, icon } = weatherData.currently;

        temperature = Math.round(temperature);
        time = moment(time * 1000);

        const timeString = time.format('h:mmA');

        const timeHours = time.format('k');
        const timeAlpha = (timeHours < 12 ? timeHours : Math.abs(24 - timeHours)) / 12;

        return (
            <div>
                <WeatherCard alpha={timeAlpha}>
                    <WeatherBody>
                        Stockholm
                    </WeatherBody>
                    <WeatherHeader>
                        <div>
                            {temperature}°
                        </div>
                    </WeatherHeader>
                    <WeatherBody>
                        <div>
                            {timeString}
                        </div>
                    </WeatherBody>
                </WeatherCard>
            </div>
        )
    }

    else {
        return (
            <div>Loading...</div>
        )
    }
}
