import useFetch from './useFetch';

export default function useWeather(location) {
    const result = useFetch(`${process.env.REACT_APP_API_URL}/${location}`);

    return result;
}
