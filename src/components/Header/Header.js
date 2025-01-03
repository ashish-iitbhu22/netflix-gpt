import React, { useEffect } from 'react'
import classes from './Header.module.scss'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/services/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../utils/redux-store/userSlice';
import { signOutUser } from '../../utils/services/firebaseService'
import images from '../../asset/images';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function signOut() {
        signOutUser().then(() => {
            console.log('signOut successfully')
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(addUser(user))
                navigate('/home')
            } else {
                dispatch(removeUser())
                navigate('/logIn')
            }
        });
        return () => unsubscribe()
    }, [])
    return (
        <div className={`${classes?.headerComponent} w-[100%] flex justify-between items-center p-4 bg-gradient-to-b from-black`}>
            <div className={classes?.header}>
                <img src={images?.netflixLogo}></img>
            </div>
            <button
                type="submit"
                className="w-[7rem] bg-red-600 hover:bg-red-700 text-white font-bold p-3 rounded focus:outline-none"
                onClick={signOut}
            >
                Sign Out
            </button>
        </div>

    )
}

export default Header