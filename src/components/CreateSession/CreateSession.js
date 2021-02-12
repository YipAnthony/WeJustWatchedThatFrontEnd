import React, { useState } from 'react'
import SelectProviders from './SelectProviders'
import streamingServices from './providers'
import SelectTimeframe from './SelectTimeframe'
import SelectGenres from './SelectGenres'
import genres from './genres'
import SelectSummary from './SelectSummary'
import SessionResults from './SessionResults'

export default function CreateSession() {

    let selectedProviderTemplate = {}
    streamingServices.forEach(service => {
        selectedProviderTemplate[service.id] = {"selected":false, "logo": service.logo}
    })

    let selectedGenreTemplate = {"noPreference": {"selected":true, "name": "No Preference"}}
    genres.forEach(genre => {
        selectedGenreTemplate[genre.id] = {"selected":false, "name": genre.name}
    })


    const [ currentPage, setCurrentPage ] = useState(0)
    const [ selectedProviders, setSelectedProviders ] = useState(selectedProviderTemplate)
    const [ selectedTimeFrame, setSelectedTimeFrame ] = useState({selected: "noPreference", range: ""})
    const [ selectedGenres, setSelectedGenres ] = useState(selectedGenreTemplate)
    const [ results, setResults ] = useState("")

    const pageRouter = [
        <SelectProviders 
            selectedProviders={selectedProviders} 
            setSelectedProviders={setSelectedProviders}
            streamingServices={streamingServices} 
        />,
        <SelectTimeframe 
            selectedTimeFrame={selectedTimeFrame}
            setSelectedTimeFrame={setSelectedTimeFrame}
        />,
        <SelectGenres 
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres = {genres}
            selectedGenreTemplate = {selectedGenreTemplate}
        />,
        <SelectSummary 
            selectedProviders={selectedProviders}
            selectedTimeFrame={selectedTimeFrame}
            selectedGenres={selectedGenres}
        />,
        <SessionResults results={results} />
    ]

    const handleNext = () => {
        const isLastPage = currentPage === pageRouter.length - 1
        if (isLastPage) return

        setCurrentPage(prev => prev + 1)
    }

    const handlePrevious = () => {
        const isFirstPage = currentPage === 0;
        if (isFirstPage) return
        
        setCurrentPage(prev => prev - 1)
    }

    const firstPage = 0;
    const summaryPage = pageRouter.length - 2
    const resultsPage = pageRouter.length - 1

    const fetchMovieResults = async () => {
        setCurrentPage(prev => prev + 1)

        let providerIDs = ""
        for (const [key] of Object.entries(selectedProviders)) {
            if (selectedProviders[key].selected) {
                providerIDs += `${key}|`
            }
        }

        let genreIDs = ""
        for (const [key] of Object.entries(selectedGenres)) {
            if (selectedGenres[key].selected) {
                genreIDs += `${key}|`
            }
        }
        const request = {
            providers: providerIDs,
            timeframe: selectedTimeFrame.range, // e.g. 2021-01-01
            genres: genreIDs,
        }

        const fetchResutls = await fetch('http://localhost:3003/session/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        const suggestedMovies = await fetchResutls.json()
        
        console.log(suggestedMovies)
    }

    return (
        <div className="h-full">
            {pageRouter[currentPage]}
            {
                currentPage === resultsPage ? 
                null: 
                <div className="flex flex-row absolute bottom-28 left-0 right-0">
                    {currentPage === firstPage ? 
                        null:  
                        currentPage === summaryPage ?    
                            <button onClick={handlePrevious} className="w-full h-12 m-3 bg-gray-600 text-gray-200 text-lg font-bold my-2 rounded-lg opacity-70">Previous</button>
                            :<button onClick={handlePrevious} className="w-full h-12 m-3 bg-gray-600 text-gray-200 text-lg font-bold my-2 rounded-lg">Previous</button>
                    }
                    {currentPage === summaryPage ? 
                    <button onClick={fetchMovieResults} className="w-full h-12 m-3 bg-blue-600 text-gray-200 text-lg font-bold my-2 rounded-lg">Create Session</button>
                    :<button onClick={handleNext} className="w-full h-12 m-3 bg-gray-600 text-gray-200 text-lg font-bold my-2 rounded-lg">Next</button>
                    }
                </div>

            }
        </div>
    )
}
