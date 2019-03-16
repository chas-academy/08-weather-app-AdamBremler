import React from 'react';
import moment from 'moment-timezone';
import { Scrollbars } from 'react-custom-scrollbars';
import WeatherProgress from './WeatherProgress';
import WeatherInfoList from './WeatherInfoList';
import WeatherInfoListItem from './WeatherInfoListItem';

export default function WeatherInfoContent(props) {
    const weatherData = props.weatherData;
    const timezone = weatherData.timezone;
    const timeFormat = props.timeFormat;
    const hourOnlyFormat = props.hourOnlyFormat;

    const hourList = weatherData.hourly.data.slice(0, 24);

    const dayList = weatherData.daily.data.slice(1);

    return (
        <div>
            <WeatherProgress {...props} />
            <Scrollbars style={{ height: 300 }} autoHide>
                <WeatherInfoList flush>
                    {[...hourList].map(hour => (
                        <WeatherInfoListItem key={hour.time}>
                            <div>
                                {moment.tz(hour.time * 1000, timezone).format(hourOnlyFormat)}
                            </div>
                            <div>
                                {Math.round(hour.temperature)}°
                            </div>
                        </WeatherInfoListItem>
                    ))}
                    {[...dayList].map(day => (
                        <WeatherInfoListItem key={day.time}>
                            <div>
                                {moment.tz(day.time * 1000, timezone).format('dddd')}
                            </div>
                            <div>
                                <div>
                                    High: {Math.round(day.temperatureHigh)}°
                                </div>
                                <div>
                                    Low: {Math.round(day.temperatureLow)}°
                                </div>
                            </div>
                        </WeatherInfoListItem>
                    ))}
                </WeatherInfoList>
            </Scrollbars>
        </div>
    )
}
