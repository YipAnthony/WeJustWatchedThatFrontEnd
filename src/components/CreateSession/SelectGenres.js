import React from 'react'

export default function SelectGenres({ selectedGenres, setSelectedGenres, genres, selectedGenreTemplate }) {

    const handleGenre = (id) => {
        setSelectedGenres(prev => {
            let current = prev[id]
            return {
                ...prev,
                noPreference: false,
                [id]: !current
            }
        })
    }

    const handleNoPreference = () => {
        setSelectedGenres(selectedGenreTemplate)
    }

    return (
        <>
            <div>
                <div className="text-gray-200 text-center text-lg font-bold">Select genres: </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {genres.map(genre => {

                    if (genre === "noPreference") return 

                    return (
                    <div className="m-3 bg-gray-600 py-2 px-3 rounded-lg relative">
                         <div>
                            {selectedGenres[genre.id] ? 
                            <svg
                                className="absolute -top-2 -right-2 w-6 h-6 text-blue-600 bg-white rounded-full border-blue-600 border-2" 
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            :null}
                        </div>
                        <div onClick={() => handleGenre(genre.id)} className="text-gray-200 text-sm font-bold">{genre.name}</div>
                    </div>
                    )
                })}
            </div>
            <div className="m-3 mt-10 w-max mx-auto bg-gray-600 py-2 px-3 rounded-lg relative">
                <div>
                    {selectedGenres.noPreference ? 
                    <svg
                        className="absolute -top-2 -right-2 w-6 h-6 text-blue-600 bg-white rounded-full border-blue-600 border-2" 
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    :null}
                </div>
                <div onClick={handleNoPreference} className="text-gray-200 text-lg font-bold">No preference</div>
            </div>
        </>
    )
}
