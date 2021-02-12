import React from 'react'

export default function SelectTimeframe({ selectedTimeFrame, setSelectedTimeFrame}) {

    const currentYear = new Date().getFullYear().toString();
    const currentMonth = (new Date().getMonth() + 1 ).toString();
    const currentMonthTwoDigit = currentMonth.length === 1 ? `0${currentMonth}` : currentMonth

    const handleThisMonth = () => {
        setSelectedTimeFrame({ selected: "month",range: `${currentYear}-${currentMonthTwoDigit}-01`})
    }
    const handleThisYear = () => {
        setSelectedTimeFrame({selected: "year", range: `${currentYear}-01-01`})
    }
    const handleNoPreference = () => {
        setSelectedTimeFrame({selected: "noPreference", range: ""})
    }

    return (
        <>
            <div>
                <div className="text-gray-200 text-center text-lg font-bold">Select release dates: </div>
            </div>
            <div className="flex flex-wrap justify-center">
                <button onClick={handleThisMonth} className={`w-4/6 px-5 py-4 m-3 bg-gray-600 text-gray-200 text-xl font-bold my-2 rounded-lg focus:outline-none ${selectedTimeFrame.selected === "month" ? "border-blue-500 border-4":""}`}>This Month</button>
                <button onClick={handleThisYear} className={`w-4/6 px-5 py-4 m-3 bg-gray-600 text-gray-200 text-xl font-bold my-2 rounded-lg focus:outline-none ${selectedTimeFrame.selected === "year" ? "border-blue-500 border-4":""}`}>This Year</button>
                <button onClick={handleNoPreference} className={`w-4/6 px-5 py-4 m-3 bg-gray-600 text-gray-200 text-xl font-bold my-2 rounded-lg focus:outline-none ${selectedTimeFrame.selected === "noPreference" ? "border-blue-500 border-4":""}`}>No Preference</button>
            </div>
        </>
    )
}
