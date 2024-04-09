import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const MovieDetail = () => {
    const [movDetail, setMovDetail] = useState()
    const params = useParams()
    const movId = params.id
    console.log(movId)

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmU5M2VmOTNiYTcwYTZlOGEwOWFhMTQ0YmI0NDNkZSIsInN1YiI6IjY2MTMyNGUzZTEwZjQ2MDFhNDM4YWMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E1WaehfvvpAkHtRU8OVJY9DSoRmTkilpPuE200D6Vak'
            }
        };

        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movId}`, options);
                const data = await response.json();
                setMovDetail(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData()
    }, [movId])

    console.log("detail ")
    console.log(movDetail)

    return (
        <main>
            {movDetail ? (
                <div className='flex items-center max-w-6xl m-auto my-14 gap-12'>
                    <div className="poster">
                        <img className='max-w-sm rounded-lg' src={`https://image.tmdb.org/t/p/original${movDetail.poster_path}`} alt="poster" />
                    </div>
                    <div className="detail flex flex-col text-xl dark:text-white">
                        <h1 className='text-4xl font-bold'>{movDetail.original_title}</h1>
                        <p className='my-7'>{movDetail.overview}</p>
                        <span className='flex gap-5'>
                            {movDetail.genres ? movDetail.genres.map((genre) => (
                                <p key={genre.name} className='border px-4 py-2 box-border border-slate-400 rounded'>{genre.name}</p>
                            )) : ''}
                        </span>
                        <div className='flex flex-col gap-3 mt-5'>
                            <span>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <p className="ms-2">4.95</p>
                                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                    <span className="font-medium">73 reviews</span>
                                </div>
                            </span>
                            <p className='font-bold'>Runtime:
                                <span className='font-normal'> {movDetail.runtime}</span>
                            </p>
                            <p className='font-bold'>Budget:
                                <span className='font-normal'> {movDetail.budget}</span>
                            </p>
                            <p className='font-bold'>Revenue:
                                <span className='font-normal'> {movDetail.revenue}</span>
                            </p>
                            <p className='font-bold'>Release date:
                                <span className='font-normal'> {movDetail.release_date}</span>
                            </p>
                            <p className='font-bold'>IMDb id:
                                <span className='font-normal'> {movDetail.imdb_id}</span>
                            </p>
                        </div>
                    </div>
                </div>
            ) : ''}

        </main>
    )
}
