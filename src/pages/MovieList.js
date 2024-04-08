import { MovieCard } from "../components"
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ apiPath }) => {
    const { data: movies } = useFetch(apiPath)
    // console.log(movies)

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
