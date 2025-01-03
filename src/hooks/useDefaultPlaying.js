import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getTmdbHeader } from "../asset/constants";
import { setDefaultPlayingMovies } from "../utils/redux-store/nowplayingSlice";
const useDefaultPlaying = (movieData)=>{
    const dispatch = useDispatch();
    const fetchDefaultPlayingMovies = async (movieData) => {
        try {
            const response = await fetch(
                'https://api.themoviedb.org/3/movie/' + movieData?.id + '/videos',
                {
                    method: 'GET',
                    headers: getTmdbHeader,
                }
            );
            const data = await response.json();
            let trailerInfo = data?.results.filter((type) => type.type === 'Trailer')
            if(trailerInfo.length > 0) {
                trailerInfo = data?.results[0]
            }
            dispatch(setDefaultPlayingMovies(trailerInfo))
        } catch (error) {
            console.error('Error fetching default playing movies:', error);
        }
    };

    useEffect(() => {
        fetchDefaultPlayingMovies(movieData);
    }, [])
}

export default useDefaultPlaying;