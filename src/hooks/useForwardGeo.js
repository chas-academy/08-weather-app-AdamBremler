import useFetch from './useFetch';

export default function useForwardGeo(searchTerm) {
    const result = useFetch(`${process.env.REACT_APP_FORWARD_GEO_URL}${searchTerm}&format=json`);

    return result;
}
