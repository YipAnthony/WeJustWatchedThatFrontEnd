import React from 'react'

export default function Card3({ tempCardInfo }) {
    return (
        <>
            <img
                className="opacity-20 absolute left-0 top-0 right-0" 
                src={tempCardInfo.posterURL} alt={`Movie poster for ${tempCardInfo.title}`}> 
            </img>
            <div className="text-2xl text-gray-200 mt-5 ml-3">Available On: </div>
            <div className="h-auto overflow-auto text-sm m-3 text-gray-300 flex flex-wrap justify-evenly items-center">
                {tempCardInfo.providers.map(provider => {
                    return (
                        <img
                            key={provider}
                            className="m-5 opacity-100 z-10 rounded-3xl"
                            src={provider} alt={`Logo`}
                        >
                        </img>
                    )
                })}
            </div>
        </>
    )
}
