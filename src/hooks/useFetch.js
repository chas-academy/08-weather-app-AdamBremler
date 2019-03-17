import { useState, useEffect } from 'react';

export default function useFetch(url, changeIdentifier) {
    const [data, setData] = useState();

    const fetchData = async () => {
        const response = await fetch(url);
        const json = await response.json();

        setData(json);
    }

    useEffect(() => {
        if (url) {
            fetchData();
        }
    }, [url, changeIdentifier]);

    return data;
}
