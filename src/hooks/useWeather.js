import useFetch from './useFetch';

export default function useWeather(location, changeIdentifier, isSiUnits) {
    location = location.replace(/\s/g, '');

    const unitParam = `?units=${isSiUnits ? 'si' : 'us'}`;

    const result = useFetch(`${process.env.REACT_APP_WEATHER_URL}/${location}${unitParam}`, changeIdentifier);

    return result;
}
