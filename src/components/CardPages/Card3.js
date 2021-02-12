import React from 'react'

export default function Card3({ tempCardInfo }) {

    const moviePoster = {
        backgroundImage: `url(${tempCardInfo.posterURL})`,
        backgroundSize: "100% auto"
    }

    return (
        <>
            <div className="h-full opacity-20 bg-center absolute left-0 top-0 right-0" style={moviePoster}></div>

            <div className="text-2xl text-gray-200 mt-10 ml-3">Available On: </div>
            <div className="h-auto overflow-auto text-sm m-3 text-gray-300 flex flex-wrap justify-evenly items-center">
                {tempCardInfo.providers.map(provider => {
                    return (
                        <img
                            key={provider}
                            className="w-14 h-14 m-3 opacity-100 z-10 rounded-2xl"
                            src={provider} alt={`Logo`}
                        >
                        </img>
                    )
                })}
            </div>
        </>
    )
}
