import React, { useState } from 'react'

export default function CreateSession() {

    const streamingServices = [
        {
            provider: "Netflix",
            logo: "https://image.tmdb.org/t/p/original/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg",
            id: 8
        }, 
        {
            provider: "Hulu",
            logo:"https://image.tmdb.org/t/p/original/giwM8XX4V2AQb9vsoN7yti82tKK.jpg",
            id: 15
        },
        {
            provider: "Disney+",
            logo:"https://image.tmdb.org/t/p/original/dgPueyEdOwpQ10fjuhL2WYFQwQs.jpg",
            id: 337
        },
        {
            provider: "Amazon Prime Video",
            logo:"https://image.tmdb.org/t/p/original//68MNrwlkpF7WnmNPXLah69CR5cb.jpg",
            id: 9
        },
        {
            provider: "HBO Max",
            logo:"https://image.tmdb.org/t/p/original/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg",
            id: 384
        },
        {
            provider: "Youtube",
            logo: "https://image.tmdb.org/t/p/original/vDCcryHD32b0yMeSCgBhuYavsmx.jpg",
            id: 192
        },
        {
            provider: "Apple TV Plus",
            logo: "https://image.tmdb.org/t/p/original/q6tl6Ib6X5FT80RMlcDbexIo4St.jpg",
            id: 350
        },
        {
            provider: "Google Play Movies",
            logo: "https://image.tmdb.org/t/p/original/p3Z12gKq2qvJaUOMeKNU2mzKVI9.jpg",
            id: 3
        },
    ]

    let selectedProviderTemplate = {}
    streamingServices.map(service => {
        selectedProviderTemplate[service.id] = false
    })
    const [ selectedProviders, setSelectedProviders ] = useState(selectedProviderTemplate)

    const handleProvider = (id) => {
        setSelectedProviders(prev => {
            let current = prev[id]
            return {
                ...prev,
                [id]: !current
            }
        })
    }

    return (
        <>
            <div>
                <div className="text-gray-200 text-center text-lg font-bold">Select your streaming services: </div>
            </div>
            <div className="flex flex-wrap justify-center">
                    {
                        streamingServices.map(service => {
                            const providerID = service.id
                            return (
                                <div className="m-4 w-20 h-20" onClick={() => handleProvider(providerID)}>
                                    <img className={`rounded-xl ${selectedProviders[providerID] ? "border-blue-500 border-4":""}`} src={service.logo} alt={service.provider}></img>   
                                </div>
                            )
                        })
                    }
            </div>
        </>
    )
}
