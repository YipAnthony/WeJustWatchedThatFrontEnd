import React, { useState } from 'react'

export default function Card() {

    const [ cardNavigation, setCardNavigation ] = useState(0)

    const touchLeft = () => {
        setCardNavigation(prev => {
            if (prev === 0) { return prev}
            return prev - 1
        }) 
    }
    const touchRight = () => {
        setCardNavigation(prev => {
            if (prev === 3) { return prev}
            return prev + 1
        }) 
    }

    const tempCardInfo = {
        posterURL: "https://image.tmdb.org/t/p/w500/bmemsraCG1kIthY74NjDnnLRT2Q.jpg",
        title: "Space Sweepers",
        releaseDate: "2021-02-05",
        genres: ["Drama", "Fantasy", "Science Fiction"],
        overview: "In the year 2092, space is full of dangerous floating garbage like discarded satellites and deserted spaceships. The crew of a space junk collector ship called The Victory discovers a humanoid robot that’s known to be a weapon of mass destruction. They get involved in a risky business deal and travel through space looking for garbage they can make money off of while also competing with rival junk collectors.",
        
    }

    let navigationButtons = [];
    for (let i = 0; i < 4; i++) {
        navigationButtons.push(
            <div key={`navigationButton${i}`} className={`h-1 w-1/5 m-1 rounded-md "  ${cardNavigation === i ? "bg-gray-900": "bg-gray-400"}`}></div>
        )
    }



    return (
        <div className="border border-gray-700 rounded-lg w-11/12 mx-auto flex flex-col overflow-hidden relative">
            <div className="h-auto overflow-hidden relative">
                <img src={tempCardInfo.posterURL}>
                </img>
                <div id="touchOverlay" className="flex flex-row w-full h-full absolute left-0 right-0 top-0">
                    <div id="touchLeft" onClick={touchLeft} className="h-full w-3/6"> </div>
                    <div id="touchRight" onClick={touchRight} className="h-full w-3/6"> </div>
                </div>
            </div>
            <div className="p-2 pt-0">
                <div className="text-lg font-bold text-gray-300">{tempCardInfo.title}</div>
                <div className="text-sm text-gray-300"><strong>Released: </strong>{tempCardInfo.releaseDate}</div>
                <p className="text-sm text-gray-300 line-clamp-3">
                    <strong>Description: </strong> {tempCardInfo.overview}
                </p>

            </div>
            <div className="flex flex-row justify-around absolute top-1 left-0 right-0">
                {navigationButtons}
            </div>
        </div>
    )
}
