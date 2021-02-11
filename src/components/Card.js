import React, { useState, useRef } from 'react'
import Card1 from './CardPages/Card1'
import Card2 from './CardPages/Card2'
import Card3 from './CardPages/Card3'
import Card4 from './CardPages/Card4'

export default function Card() {

    const [ cardNavigation, setCardNavigation ] = useState(0)

    const ref = useRef(null);

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
        providers: [
            "https://image.tmdb.org/t/p/original/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg",
            "https://image.tmdb.org/t/p/original/q6tl6Ib6X5FT80RMlcDbexIo4St.jpg",
            "https://image.tmdb.org/t/p/original/p3Z12gKq2qvJaUOMeKNU2mzKVI9.jpg",
            "https://image.tmdb.org/t/p/original/vDCcryHD32b0yMeSCgBhuYavsmx.jpg",

        ],
        trailer: "H1WYnJF1Pwo"
    }


    const cardArray = [ 
        <Card1 tempCardInfo={tempCardInfo}/>, 
        <Card2 tempCardInfo={tempCardInfo}/>, 
        <Card3 tempCardInfo={tempCardInfo}/>, 
        <Card4 tempCardInfo={tempCardInfo} width={ref.current ? ref.current.offsetWidth:null}/> 
    ]

    let pageIndicator = [];
    for (let i = 0; i < 4; i++) {
        pageIndicator.push(
            <div key={`navigationButton${i}`} className={`h-1 w-1/5 m-1 rounded-md "  ${cardNavigation === i ? "bg-gray-900": "bg-gray-400"}`}></div>
        )
    }

    return (
        <div ref={ref}  className="border border-gray-900 rounded-lg w-11/12 h-full mx-auto flex flex-col overflow-hidden relative">
            

            {cardArray[cardNavigation]}
            
            <div className="flex flex-row justify-around absolute top-1 left-0 right-0">
                {pageIndicator}
            </div>

            <div id="touchOverlay" className="flex flex-row w-full h-full absolute left-0 right-0 top-0 z-20">
                    <div id="touchLeft" onClick={touchLeft} className="h-full w-3/6"> </div>
                    <div id="touchRight" onClick={touchRight} className="h-full w-3/6"> </div>
                </div>
        </div>
    )
}
