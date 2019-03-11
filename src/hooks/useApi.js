import useFetch from './useFetch';

export default function useApi(location) {
    const result = useFetch(`${process.env.REACT_APP_API_URL}/${location}`);

    return result;
}
