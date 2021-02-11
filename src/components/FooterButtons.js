import React from 'react'

export default function FooterButtons() {
    return (
        <div className="w-screen h-2/6 bg-black flex flex-row justify-around p-5">
            <div className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center">
                <svg
                    className="text-yellow-300 h-7 w-7 text-center" 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                </svg>
            </div>
            <div className="w-11 h-11 rounded-full bg-gray-800 flex justify-center items-center">
                <svg 
                    className="text-red-500 h-9 w-9 text-center" 
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div className="w-11 h-11 rounded-full bg-gray-800 flex justify-center items-center">
                <svg 
                    className="text-green-500 h-9 w-9 text-center" 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center">
                <svg 
                    className="text-blue-600 h-7 w-7 text-center" 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    )
}
