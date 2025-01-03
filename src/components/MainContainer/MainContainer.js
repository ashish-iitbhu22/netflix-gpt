import React from 'react'
import { useSelector } from 'react-redux'
import BgVideo from '../BgVideo/BgVideo'

const MainContainer = () => {
    const data = useSelector((state) => {
        return state.nowPlaying.movies
    })
    console.log(data)
    if (!data.length) return
    let movieData = data[0];
    return (
        <div>
            <BgVideo videoInfo={movieData} />
        </div>
    )
}

export default MainContainer