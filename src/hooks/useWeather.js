import useFetch from './useFetch';

export default function useWeather(location) {
    location = location.replace(/\s/g, '');

    const result = useFetch(`${process.env.REACT_APP_WEATHER_URL}/${location}`);

    return result;
}
