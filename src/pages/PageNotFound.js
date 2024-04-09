import React from 'react'

export const PageNotFound = () => {
    return (
        <main className='flex w-screen-max justify-center items-center'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold mb-10 dark:text-white'>404 Page Not Found</h1>
                <p className='text-xl font-medium dark:text-white'>Whoops! That page doesn’t exist. But do not fret, check out our other resources from below to get started.</p>
            </div>
        </main>
    )
}
