import React from 'react';
import windIcon from '../img/wind-speed.svg';
import humidityIcon from '../img/humidity.svg';

export default function WeatherMiscContent({ windSpeed, humidity }) {
    return (
        <div>
            <div>
                <img src={windIcon} alt='Wind speed' title='Wind speed' />
                {windSpeed}
            </div>
            <div>
                <img src={humidityIcon} alt='Humidity' title='Humidity' />
                {humidity * 100} %
            </div>
        </div>
    )
}
