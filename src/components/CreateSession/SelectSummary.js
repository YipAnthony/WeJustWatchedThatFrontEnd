import React from 'react'

export default function SelectSummary({ selectedProviders, selectedTimeFrame, selectedGenres }) {

    let userSelectedProviders = []
    for (const [key] of Object.entries(selectedProviders)) {
        if (selectedProviders[key].selected) {
            userSelectedProviders.push(selectedProviders[key].logo)
        }
    }

    let userSelectedGenres = []
    for (const [key] of Object.entries(selectedGenres)) {
        if (selectedGenres[key].selected) {
            userSelectedGenres.push(selectedGenres[key].name)
        }
    }


    return (
        <>
            <div className="text-gray-200 text-center text-lg font-bold">Summary: </div>

            <div className="text-gray-200 m-3 text-lg font-bold">Streaming services:</div>
            <div className="flex flex-row flex-wrap justify-start">
                {userSelectedProviders.map(provider => {
                    return (
                        <div className="w-12 mx-3" key={provider}>
                            <img className="rounded-xl" src={provider} alt="provider"/>
                        </div>
                    )
                })}
            </div>

            <div className="text-gray-200 m-3 text-lg font-bold">Released:
                <span className="text-gray-200 text-base font-normal mx-3">
                    {selectedTimeFrame.selected === "noPreference" ? "No Preference" : selectedTimeFrame.selected === "year" ? "This Year" : "This Month"}
                </span>
            </div>
            <div className="text-gray-200 m-3 text-lg font-bold">Genres:</div>
            <div className="flex flex-row flex-wrap justify-start mx-3">
                {userSelectedGenres.map(genre => {
                    return (
                        <div className="w-max m-1 text-gray-200 bg-gray-600 p-2 rounded-lg" key={genre}>
                            {genre}
                        </div>
                    )
                })}
            </div>

        </>
    )
}
