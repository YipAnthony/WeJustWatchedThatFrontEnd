import React, { useState } from 'react'
import YouTube from 'react-youtube';

const loadingIcon = <img className="absolute " alt="loadingIcon" src={process.env.PUBLIC_URL + '/loadingIcon.svg'}></img>

export default function Card4({ tempCardInfo, width }) {

    const [ videoLoading, setVideoLoading ] = useState(true)

    const videoDoneLoading = () => {
        setVideoLoading(false)
    }

    const opts = {
        width: width,
        height: width*2/3,
        playerVars: {
          autoplay: 0,
        },
      };

    return (
        <>
        <img
            className="opacity-20 absolute left-0 top-0 right-0" 
            src={tempCardInfo.posterURL} alt={`Movie poster for ${tempCardInfo.title}`}> 
        </img>
        <div className="text-2xl text-gray-200 mt-5 ml-3">Trailer: </div>
        <div className="w-full z-30 flex justify-center relative">
            {videoLoading ? loadingIcon: null}
            <YouTube videoId={tempCardInfo.trailer} onReady={videoDoneLoading}  opts={opts}/>
            
        </div>
    </>
    )
}
