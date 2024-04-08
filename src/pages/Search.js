import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components"

export const Search = ({ apiPath }) => {
    const [searchParams] = useSearchParams();
    const queryTerms = searchParams.get('q');

    const { data: movies } = useFetch(apiPath, queryTerms)

    return (
        <main>
            <div className="container max-w-screen-xl m-auto mt-4 p-5 text-4xl font-semibold dark:text-white">
                <p>{movies ? `Results for "${queryTerms}"` : `No results for "${queryTerms}"`}</p>
            </div>
            <div className="flex justify-center gap-10 flex-wrap max-w-screen-xl m-auto my-4 p-5">
                {movies && movies.map(mov => (
                    <MovieCard key={mov.id} mov={mov} />
                ))}
            </div>
        </main>
    )
}
