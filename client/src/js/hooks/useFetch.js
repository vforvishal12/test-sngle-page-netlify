import React, {useState, useEffect} from 'react';

const useFetch = (inputURL) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchURL() {
        console.log('fetchURL');
        const response = await fetch(inputURL);
        const json = await response.json();

        setData(json);
        setLoading(false);
    }

    useEffect(() => {
        console.log('useEffect');
        fetchURL();
    }, []);

    return [{ data, loading }];
};

export { useFetch };