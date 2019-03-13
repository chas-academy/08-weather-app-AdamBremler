import useFetch from './useFetch';

export default function useReverseGeo(coords) {
    // Remove spaces and split at ','
    const [lat, lon] = coords.replace(/\s/g, '').split(',');

    if (!lat || !lon) {
        return;
    }

    const result = useFetch(`${process.env.REACT_APP_REVERSE_GEO_URL}&lat=${lat}&lon=${lon}`);

    return result;
}
