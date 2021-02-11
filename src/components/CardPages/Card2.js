import React from 'react'

export default function Card2({ tempCardInfo }) {

    const moviePoster = {
        backgroundImage: `url(${tempCardInfo.posterURL})`,
        backgroundSize: "100% auto"
    }

    return (
        <>
            <div className="h-full opacity-20 bg-center absolute left-0 top-0 right-0" style={moviePoster}></div>
            <div className="text-2xl text-gray-200 mt-10 ml-3">Synopsis: </div>
            <div className="h-auto overflow-auto text-sm m-3 text-gray-200 flex items-center z-10">
                {tempCardInfo.overview}
            </div>
        </>
    )
}
