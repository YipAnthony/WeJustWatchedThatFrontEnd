import React from 'react'
import YouTube from 'react-youtube';

export default function Card4({ tempCardInfo }) {
    const opts = {
        width: '350',
        height: '300',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    return (
        <>
        <img
            className="opacity-20 absolute left-0 top-0 right-0" 
            src={tempCardInfo.posterURL} alt={`Movie poster for ${tempCardInfo.title}`}> 
        </img>
        <div className="text-2xl text-gray-200 mt-5 ml-3">Trailer: </div>
        <div className="w-full z-30 flex justify-center">
            <YouTube videoId={tempCardInfo.trailer} opts={opts}/>
        </div>
    </>
    )
}
