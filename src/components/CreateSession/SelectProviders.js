import React from 'react'

export default function SelectProviders({selectedProviders, setSelectedProviders, streamingServices}) {

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
                            <div className="m-4 w-20 h-20 relative" onClick={() => handleProvider(providerID)} key={`providerIcon${providerID}`}>
                                <div>
                                    {selectedProviders[providerID] ? 
                                    <svg
                                        className="absolute -top-3 -right-3 w-8 h-8 text-blue-600 bg-white rounded-full border-blue-600 border-2" 
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    :null}
                                </div>
                                <img className={`rounded-xl ${selectedProviders[providerID] ? "border-blue-500 border-4":""}`} src={service.logo} alt={service.provider}></img>   
                            </div>
                        )
                    })
                    }
            </div>
        </>
    )
}
