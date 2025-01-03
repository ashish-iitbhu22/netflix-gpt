import React, { useEffect} from 'react'
import Header from '../Header/Header'
import useNowplaying from '../../hooks/useNowPlaying'
import useDefaultPlaying from '../../hooks/useDefaultPlaying'
import BgVideo from '../BgVideo/BgVideo'
import MainContainer from '../MainContainer/MainContainer'

const Home = () => {
  useNowplaying()
  return (
    <div>
      <Header />
      <MainContainer />
     
    </div>
  )
}

export default Home