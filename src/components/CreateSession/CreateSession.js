import React, { useState } from 'react'
import SelectProviders from './SelectProviders'
import streamingServices from './providers'
import SelectTimeframe from './SelectTimeframe'
import SelectGenres from './SelectGenres'
import genres from './genres'

export default function CreateSession() {

    let selectedProviderTemplate = {}
    streamingServices.map(service => {
        selectedProviderTemplate[service.id] = false
    })

    let selectedGenreTemplate = {"noPreference": true}
    genres.map(genre => {
        selectedGenreTemplate[genre.id] = false
    })


    const [ currentPage, setCurrentPage ] = useState(0)
    const [ selectedProviders, setSelectedProviders ] = useState(selectedProviderTemplate)
    const [ selectedTimeFrame, setSelectedTimeFrame ] = useState({selected: "noPreference", range: ""})
    const [ selectedGenres, setSelectedGenres ] = useState(selectedGenreTemplate)
  
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

    return (
        <div className="h-full">
            {pageRouter[currentPage]}
            <div className="flex flex-row absolute bottom-28 left-0 right-0">
                {currentPage === 0 ? 
                    null:     
                    <button onClick={handlePrevious} className="w-full h-12 m-3 bg-gray-600 text-gray-200 text-lg font-bold my-2 rounded-lg">Previous</button>
                }
                <button onClick={handleNext} className="w-full h-12 m-3 bg-gray-600 text-gray-200 text-lg font-bold my-2 rounded-lg">Next</button>
            </div>
        </div>
    )
}
