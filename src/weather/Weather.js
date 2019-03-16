import React, { useState, useEffect } from 'react';
import useWeather from '../hooks/useWeather';
import useReverseGeo from '../hooks/useReverseGeo';
import moment from 'moment-timezone';
import WeatherContainer from './WeatherContainer';
import WeatherInnerContainer from './WeatherInnerContainer';
import WeatherCard from './WeatherCard';
import WeatherHeader from './WeatherHeader';
import WeatherBody from './WeatherBody';
import WeatherIcon from './WeatherIcon';
import WeatherIconContainer from './WeatherIconContainer';
import WeatherMiscContainer from './WeatherMiscContainer';
import WeatherInfoContainer from './WeatherInfoContainer';
import WeatherInfoContent from './WeatherInfoContent';
import WeatherMiscContent from './WeatherMiscContent';

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

        const timeFormat = 'h:mmA';
        const hourOnlyFormat = 'hA';

        const timeString = time.format(timeFormat);

        const timeHours = time.format('k');
        const timeAlpha = (timeHours < 12 ? timeHours : Math.abs(24 - timeHours)) / 12;

        return (
            <WeatherContainer>
                <WeatherInnerContainer>
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
                        <WeatherMiscContainer>
                            <WeatherMiscContent windSpeed={windSpeed} humidity={humidity} />
                        </WeatherMiscContainer>
                        <WeatherIconContainer>
                            <WeatherIcon icon={icon} />
                        </WeatherIconContainer>
                    </WeatherCard>
                    <WeatherInfoContainer>
                        <WeatherInfoContent weatherData={weatherData} timeFormat={timeFormat} timeAlpha={timeAlpha} hourOnlyFormat={hourOnlyFormat} />
                    </WeatherInfoContainer>
                </WeatherInnerContainer>
            </WeatherContainer>
        )
    }

    else {
        return (
            <div>Loading...</div>
        )
    }
}
