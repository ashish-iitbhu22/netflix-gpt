import React from 'react'

const VideoDetailsOverlay = ({ videoInfo }) => {
    console.log(videoInfo)
    return (
        <div className='w-screen aspect-video flex items-center absolute top-0 bg-gradient-to-r from-black pl-12 pt-12'>
            <div className='flex-col justify-start w-3/4'>
                <div className='bold title text-6xl text-white'>{videoInfo?.original_title}</div>
                <div className='description text-lg text-white'>{videoInfo?.overview}</div>
                <div className='flex gap-3 mt-4'>
                    <div className='w-[100px] rounded-lg text-center bg-white hover:bg-gray-400 p-2 text-black'>▶️ Play</div>
                    <div className='w-[100px] rounded-lg text-center bg-gray-500 py-2 hover:bg-gray-700 text-white'> More Info</div>
                </div>
            </div>
        </div>
    )
}

export default VideoDetailsOverlay