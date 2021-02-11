import React from 'react'

export default function Card1({ tempCardInfo }) {

    const moviePoster = {
        backgroundImage: `url(${tempCardInfo.posterURL})`,
        backgroundSize: "100% auto"
    }


    return (
        <>
            <div className="h-5/6 relative bg-center" style={moviePoster}></div>
            <div className="h-5/6 w-full absolute top-0 left-0 right-0 bg-gradient-to-b from-transparent to-black z-0"></div>

            <div className="p-2 pt-0 z-10">
                <div className="text-lg font-bold text-gray-300">{tempCardInfo.title}</div>
                <div className="text-sm text-gray-300"><strong>Released: </strong>{tempCardInfo.releaseDate}</div>
                <p className="text-sm text-gray-300 line-clamp-3">
                    <strong>Description: </strong> {tempCardInfo.overview}
                </p>
            </div>
        </>
    )
}
