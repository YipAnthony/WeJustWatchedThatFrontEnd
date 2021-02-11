import React from 'react'

export default function Card1({ tempCardInfo }) {
    return (
        <>
            <div className="h-auto overflow-hidden relative">
                <img src={tempCardInfo.posterURL} alt={`Movie poster for ${tempCardInfo.title}`}> 
                </img>
            </div>
            <div className="p-2 pt-0">
                <div className="text-lg font-bold text-gray-300">{tempCardInfo.title}</div>
                <div className="text-sm text-gray-300"><strong>Released: </strong>{tempCardInfo.releaseDate}</div>
                <p className="text-sm text-gray-300 line-clamp-3">
                    <strong>Description: </strong> {tempCardInfo.overview}
                </p>
            </div>
        </>
    )
}
