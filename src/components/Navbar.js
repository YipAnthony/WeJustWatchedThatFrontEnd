import React from 'react'

export default function Navbar() {
    // add in login status in the prop, filter off user/logout icon if not logged in
    return (
        <div className="h-1/6 flex bg-black justify-between items-center p-5 relative">
            <div className="rounded-full w-10 h-10 overflow-hidden">
                <span className="">
                    <svg
                        className="w-10 h-10 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </span>
            </div>
            <div>
                <div className="text-sm text-center text-red-500">
                    We Just
                </div>
                <div className="text-lg text-center text-red-500">
                    Watched That
                </div>
            </div>
            <div className="rounded-full w-10 h-10 overflow-hidden">
                <span className="">
                    <svg
                        className="w-10 h-10 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </span>
            </div>
        </div>
    )
}
