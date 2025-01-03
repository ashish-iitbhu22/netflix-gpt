import React from 'react'
import useDefaultPlaying from '../../hooks/useDefaultPlaying'
import { useSelector } from 'react-redux'

const BgVideo = ({ videoInfo }) => {
    useDefaultPlaying(videoInfo)
    const data = useSelector((state) => state.nowPlaying.default)
    if(!data) return
    console.log(data)
    return (
        <div>
            <iframe
                className="w-screen aspect-video"
                src={`https://www.youtube.com/embed/${data?.key}?autoplay=1&mute=1&controls=0`}
                allow="autoplay; encrypted-media;">
            </iframe>
        </div>
    )
}

export default BgVideo