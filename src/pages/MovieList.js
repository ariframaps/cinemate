import { useEffect, useState } from "react";
import { MovieCard } from "../components"

export const MovieList = () => {

    const [movies, setMovies] = useState()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmU5M2VmOTNiYTcwYTZlOGEwOWFhMTQ0YmI0NDNkZSIsInN1YiI6IjY2MTMyNGUzZTEwZjQ2MDFhNDM4YWMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E1WaehfvvpAkHtRU8OVJY9DSoRmTkilpPuE200D6Vak'
        }
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(response => response.json())
            .then(response => setMovies(response.results))
            .catch(err => console.error(err));
    }, [])

    console.log(movies)

    return (
        <main>
            <div className="flex justify-center gap-10 flex-wrap max-w-screen-xl m-auto my-10 p-5">
                {movies && movies.map(mov => (
                    <MovieCard key={mov.id} mov={mov} />
                ))}
            </div>
        </main>
    )
}
