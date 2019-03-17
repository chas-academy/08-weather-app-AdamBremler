import React from 'react';
import moment from 'moment-timezone';
import { Scrollbars } from 'react-custom-scrollbars';
import WeatherProgress from './WeatherProgress';
import WeatherInfoHorizontalListContainer from './WeatherInfoHorizontalListContainer';
import WeatherInfoHorizontalList from './WeatherInfoHorizontalList';
import WeatherInfoHorizontalListItem from './WeatherInfoHorizontalListItem';
import WeatherInfoList from './WeatherInfoList';
import WeatherInfoListItem from './WeatherInfoListItem';
import WeatherIcon from './WeatherIcon';
import WeatherListIconContainer from './WeatherListIconContainer';
import upIcon from '../img/arrow-up.svg';
import downIcon from '../img/arrow-down.svg';
import SmallDiv from '../common/SmallDiv';

export default function WeatherInfoContent(props) {
    const weatherData = props.weatherData;
    const timezone = weatherData.timezone;
    const timeFormat = props.timeFormat;
    const hourOnlyFormat = props.hourOnlyFormat;

    const hourList = weatherData.hourly.data.slice(1, 25).map(h => ({ ...h, momentTime: moment.tz(h.time * 1000, timezone) }));

    console.log(hourList)

    const dayList = weatherData.daily.data.slice(1).map(d => ({ ...d, momentTime: moment.tz(d.time * 1000, timezone) }));

    moment.locale('en', {
        calendar: {
            lastDay: '[Yesterday]',
            sameDay: '[Today]',
            nextDay: '[Tomorrow]',
            lastWeek: '[last] dddd',
            nextWeek: 'dddd',
            sameElse: 'L'
        }
    });

    return (
        <div>
            <WeatherProgress {...props} />
            <WeatherInfoHorizontalListContainer>
                <Scrollbars autoHeight>
                    <WeatherInfoHorizontalList>
                        {[...hourList].map(hour => (
                            <WeatherInfoHorizontalListItem key={`hour${hour.time}`} hour={1}>
                                <div>
                                    <small>
                                        {hour.momentTime.isSameOrAfter(moment().add(1, 'day'), 'd') ?
                                            hour.momentTime.clone().startOf('day').calendar(moment().startOf('day')) : ''
                                        }
                                    </small>
                                    <SmallDiv>
                                        {hour.momentTime.format(hourOnlyFormat)}
                                    </SmallDiv>
                                </div>
                                <WeatherListIconContainer horizontal>
                                    <WeatherIcon icon={hour.icon} />
                                </WeatherListIconContainer>
                                <div>
                                    {Math.round(hour.temperature)}°
                                </div>
                            </WeatherInfoHorizontalListItem>
                        ))}
                    </WeatherInfoHorizontalList>
                </Scrollbars>
            </WeatherInfoHorizontalListContainer>
            <Scrollbars style={{ height: 200 }}>
                <WeatherInfoList flush>
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
