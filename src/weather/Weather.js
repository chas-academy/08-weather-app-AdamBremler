import React, { useState } from 'react';
import { Card, CardBody, Row } from 'reactstrap';
import useApi from '../hooks/useApi';
import moment from 'moment';
import TemperatureHeader from './TemperatureHeader';

export default function Weather(props) {
    const [location, setLocation] = useState('37.8267,-122.4233');
    const data = useApi(location);

    if (data) {
        const { temperature, windSpeed, humidity, icon } = data.currently;
        const time = moment(data.currently).format('ddd, hA');

        return (
            <div>
                <Card>
                    <CardBody>
                        <Row>
                            <TemperatureHeader>
                                {time}
                            </TemperatureHeader>
                            <TemperatureHeader>
                                {temperature}
                            </TemperatureHeader>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        )
    }

    else {
        return (
            <div>Loading...</div>
        )
    }
}
