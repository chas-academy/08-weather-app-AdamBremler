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
import WeatherBodyDay from './WeatherBodyDay';
import WeatherRemoveButton from './WeatherRemoveButton';
import WeatherRemoveButtonContainer from './WeatherRemoveButtonContainer';

export default function Weather(props) {
    const [location, setLocation] = useState(props.location);

    const [changeIdentifier, setChangeIdentifier] = useState();

    const [timeAlpha, setTimeAlpha] = useState(1);

    const weatherData = useWeather(location, changeIdentifier, props.isSiUnits);
    const geoData = useReverseGeo(location);

    const removeSelf = () => {
        props.remove(location);
    }

    const getTimeUntilNextMinute = () => {
        return moment().add(1, 'minute').startOf('minute').add(5, 'seconds').diff(moment());
    }

    const updateData = () => {
        setChangeIdentifier(moment().format('m'));

        setTimeout(updateData, getTimeUntilNextMinute());
    }

    useEffect(() => {
        setLocation(props.location);

        //setTimeout(updateData, getTimeUntilNextMinute());
    }, [props.location]);

    useEffect(() => {
        if (props.setMainAlpha) {
            props.setMainAlpha(timeAlpha);
        }
    }, [timeAlpha]);

    useEffect(() => {
        if (weatherData && geoData && (weatherData.error || geoData.error)) {
            removeSelf();
        };
    }, [weatherData, geoData]);

    if (weatherData && geoData && !weatherData.error && !geoData.error) {
        let { time, temperature, windSpeed, humidity, icon } = weatherData.currently;

        temperature = Math.round(temperature);
        time = moment.tz(time * 1000, weatherData.timezone);

        const timeFormat = props.isSiUnits ? 'kk:mm' : 'h:mmA';
        const hourOnlyFormat = props.isSiUnits ? 'kk' : 'hA';

        const timeString = time.format(timeFormat);

        const timeHours = time.format('k');
        const alpha = (timeHours < 12 ? timeHours : Math.abs(24 - timeHours)) / 12;
        if (timeAlpha !== alpha) {
            setTimeAlpha(alpha);
        }

        return (
            <WeatherContainer>
                <WeatherInnerContainer>
                    <WeatherCard alpha={timeAlpha}>
                        <WeatherBody>
                            {
                                geoData.address.city ||
                                geoData.address.water ||
                                geoData.address.state ||
                                geoData.address.county ||
                                geoData.address.suburb ||
                                geoData.address.name ||
                                geoData.name ||
                                geoData.address.village ||
                                geoData.address.road ||
                                geoData.address.country
                            }
                        </WeatherBody>
                        <WeatherHeader>
                            {temperature}°
                        </WeatherHeader>
                        <WeatherBody>
                            {timeString}
                            <WeatherBodyDay>{time.format('dddd')}</WeatherBodyDay>
                        </WeatherBody>
                        <WeatherMiscContainer>
                            <WeatherMiscContent windSpeed={windSpeed} humidity={humidity} />
                        </WeatherMiscContainer>
                        <WeatherIconContainer>
                            <WeatherIcon icon={icon} />
                        </WeatherIconContainer>
                        {props.removeAble ? (
                            <WeatherRemoveButtonContainer onClick={removeSelf}>
                                <WeatherRemoveButton />
                            </WeatherRemoveButtonContainer>
                        ) : ''}
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
