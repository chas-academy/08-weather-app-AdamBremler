import React from 'react';
import windIcon from '../img/wind-speed.svg';
import humidityIcon from '../img/humidity.svg';

export default function WeatherMiscContent({ windSpeed, humidity, isSiUnits }) {
    return (
        <div>
            <div>
                <img src={windIcon} alt='Wind speed' title='Wind speed' />
                {Math.round(windSpeed)} {isSiUnits ? 'm/s' : 'mph'}
            </div>
            <div>
                <img src={humidityIcon} alt='Humidity' title='Humidity' />
                {Math.round(humidity * 100)}
                {isSiUnits ? ' ' : ''}
                %
            </div>
        </div>
    )
}
