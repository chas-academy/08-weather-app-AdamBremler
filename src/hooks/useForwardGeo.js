import useFetch from './useFetch';

export default function useForwardGeo(searchTerm) {
    const result = useFetch(searchTerm ? `${process.env.REACT_APP_FORWARD_GEO_URL}${searchTerm}` : '');

    return result;
}
