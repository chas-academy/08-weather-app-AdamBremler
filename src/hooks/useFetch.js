import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState();

    const fetchData = async () => {
        const response = await fetch(url);
        const json = await response.json();

        setData(json);
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return data;
}