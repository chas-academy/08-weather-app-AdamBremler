import React from 'react';
import moment from 'moment-timezone';
import { Row, Col, Progress } from 'reactstrap';

export default function WeatherInfoContent({ weatherData, timeFormat }) {
    const sunrise = moment.tz(
        weatherData.daily.data[0].sunriseTime * 1000,
        weatherData.timezone
    );

    const sunset = moment.tz(
        weatherData.daily.data[0].sunsetTime * 1000,
        weatherData.timezone
    );

    return (
        <Row>
            <Col className='text-left d-flex flex-column'>
                <div>
                    Sunrise
                </div>
                <div>
                    {sunrise.format(timeFormat)}
                </div>
            </Col>
            <Col xs='5' sm='8' md='6' lg='4' xl='4' className='d-flex flex-column justify-content-center'>
                <Progress value={50} />
            </Col>
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
