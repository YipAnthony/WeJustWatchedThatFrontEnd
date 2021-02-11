import React from 'react'

export default function Card2({ tempCardInfo }) {
    return (
        <>
            <img
                className="opacity-20 absolute left-0 top-0 right-0" 
                src={tempCardInfo.posterURL} alt={`Movie poster for ${tempCardInfo.title}`}> 
            </img>
            <div className="text-2xl text-gray-200 mt-5 ml-3">Synopsis: </div>
            <div className="h-auto overflow-auto text-sm m-3 text-gray-200 flex items-center z-10">
                {tempCardInfo.overview}
            </div>
        </>
    )
}
