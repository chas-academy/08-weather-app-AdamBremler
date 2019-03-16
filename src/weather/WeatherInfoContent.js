import React from 'react';
import moment from 'moment-timezone';
import { Scrollbars } from 'react-custom-scrollbars';
import WeatherProgress from './WeatherProgress';
import WeatherInfoList from './WeatherInfoList';
import WeatherInfoListItem from './WeatherInfoListItem';
import WeatherIcon from './WeatherIcon';
import WeatherListIconContainer from './WeatherListIconContainer';
import upIcon from '../img/arrow-up.svg';
import downIcon from '../img/arrow-down.svg';

export default function WeatherInfoContent(props) {
    const weatherData = props.weatherData;
    const timezone = weatherData.timezone;
    const timeFormat = props.timeFormat;
    const hourOnlyFormat = props.hourOnlyFormat;

    const hourList = weatherData.hourly.data.slice(1, 25);

    const dayList = weatherData.daily.data.slice(1);

    return (
        <div>
            <WeatherProgress {...props} />
            <Scrollbars style={{ height: 300 }} autoHide>
                <WeatherInfoList flush>
                    {[...hourList].map(hour => (
                        <WeatherInfoListItem key={`hour${hour.time}`} hour={1}>
                            <div>
                                {moment.tz(hour.time * 1000, timezone).format(hourOnlyFormat)}
                            </div>
                            <WeatherListIconContainer>
                                <WeatherIcon icon={hour.icon} />
                            </WeatherListIconContainer>
                            <div>
                                {Math.round(hour.temperature)}°
                            </div>
                        </WeatherInfoListItem>
                    ))}
                    {[...dayList].map(day => (
                        <WeatherInfoListItem key={`day${day.time}`} day={1}>
                            <div>
                                {moment.tz(day.time * 1000, timezone).format('dddd')}
                            </div>
                            <WeatherListIconContainer>
                                <WeatherIcon icon={day.icon} />
                            </WeatherListIconContainer>
                            <div>
                                <div>
                                    <img src={upIcon} alt='Highest temperature' title='Highest temperature' />
                                    {Math.round(day.temperatureHigh)}°
                                </div>
                                <div>
                                    <img src={downIcon} alt='Lowest temperature' title='Lowest temperature' />
                                    {Math.round(day.temperatureLow)}°
                                </div>
                            </div>
                        </WeatherInfoListItem>
                    ))}
                </WeatherInfoList>
            </Scrollbars>
        </div>
    )
}
