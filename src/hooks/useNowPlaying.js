import { useEffect } from 'react';
import {getTmdbHeader} from '../asset/constants'
import { useDispatch } from 'react-redux';
import { setNowPlayingMovies } from '../utils/redux-store/nowplayingSlice';

const useNowplaying = ()=>{
    const dispatch = useDispatch();
    const fetchNowPlayingMovies = async () => {
        try {
            const response = await fetch(
                'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
                {
                    method: 'GET',
                    headers: getTmdbHeader,
                }
            );
            const data = await response.json();
            dispatch(setNowPlayingMovies(data?.results))
        } catch (error) {
            console.error('Error fetching now playing movies:', error);
        }
    };

    useEffect(() => {
        fetchNowPlayingMovies();
    }, [])
}

export default useNowplaying;