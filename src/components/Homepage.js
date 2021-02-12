import React from 'react'

export default function Homepage({ setContentPage }) {

    const handleCreateSession = () => {
        setContentPage("createSession")
    }
    const handleJoinSession = () => {
        setContentPage("joinSession")
    }
    const handleHistory = () => {
        setContentPage("history")
    }

    return (
        <div className="w-full flex flex-col items-center">
            <button onClick={handleCreateSession} className="w-4/6 h-12 bg-gray-600 text-gray-200 text-lg font-bold my-2 rounded-lg">Create Session</button>
            <button onClick={handleJoinSession} className="w-4/6 h-12 bg-gray-600 text-gray-200 text-lg font-bold my-2 rounded-lg">Join Session</button>
            <button onClick={handleHistory} className="w-4/6 h-12 bg-gray-600 text-gray-200 text-lg font-bold mt-10 rounded-lg">History</button>
        </div>
    )
}
