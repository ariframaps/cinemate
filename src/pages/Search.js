import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components"

export const Search = ({ apiPath }) => {
    const [searchParams] = useSearchParams();
    const queryTerms = searchParams.get('q');

    const { data: movies } = useFetch(apiPath, queryTerms)

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
