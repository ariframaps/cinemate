import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerms = '') => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmU5M2VmOTNiYTcwYTZlOGEwOWFhMTQ0YmI0NDNkZSIsInN1YiI6IjY2MTMyNGUzZTEwZjQ2MDFhNDM4YWMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E1WaehfvvpAkHtRU8OVJY9DSoRmTkilpPuE200D6Vak'
        }
    };
    const [data, setData] = useState([])
    const api = 'https://api.themoviedb.org/3/';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${api}${apiPath}${queryTerms ? `?query=${queryTerms}` : ''}`, options);
                const result = await response.json();
                setData(result.results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData()
    }, [apiPath, queryTerms])

    return { data }
}
