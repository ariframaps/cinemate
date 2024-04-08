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

    console.log(`${api}${apiPath}?query=${queryTerms}&include_adult=true&language=en-US&page=1`)

    useEffect(() => {
        fetch(`${api}${apiPath}?query=${queryTerms}&include_adult=true&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => {
                setData(response.results)
                console.log(data)
            })
            .catch(err => console.error(err));
    }, [apiPath, queryTerms])

    return { data }
}
