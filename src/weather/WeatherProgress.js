import React from 'react';
import moment from 'moment-timezone';
import Color from 'color';
import { Row, Col } from 'reactstrap';
import WeatherProgressContainer from './WeatherProgressContainer';
import WeatherProgressBar from './WeatherProgressBar';

export default function WeatherProgress({ weatherData, timeFormat, timeAlpha }) {
    const sunrise = moment.tz(
        weatherData.daily.data[0].sunriseTime * 1000,
        weatherData.timezone
    );

    const sunset = moment.tz(
        weatherData.daily.data[0].sunsetTime * 1000,
        weatherData.timezone
    );

    const sunTime = sunset.diff(sunrise);

    const time = moment.tz(weatherData.currently.time * 1000, weatherData.timezone);

    const timeSinceRise = time.diff(sunrise);
    const sunProgress = (timeSinceRise / sunTime) * 100;

    const progressColor = Color('#94bae8').darken(Math.abs(1 - timeAlpha));

    return (
        <Row>
            <Col className='text-left'>
                <div>
                    Sunrise
                </div>
                <div>
                    {sunrise.format(timeFormat)}
                </div>
            </Col>
            <WeatherProgressContainer>
                <WeatherProgressBar value={sunProgress} color={progressColor.string()} />
            </WeatherProgressContainer>
            <Col className='text-right'>
                <div>
                    Sunset
                </div>
                <div>
                    {sunset.format(timeFormat)}
                </div>
            </Col>
        </Row>
    )
}
