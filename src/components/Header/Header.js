import React, { useEffect } from 'react'
import classes from './Header.module.scss'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../utils/userSlice';
import { signOutUser } from '../../utils/firebaseService'

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
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(addUser(user))
                navigate('/home')
            } else {
                dispatch(removeUser())
                navigate('/logIn')
            }
        });
    }, [])
    return (
        <div className='w-[100%] flex justify-between items-center p-4'>
            <div className={classes?.header}>
                <img src={'https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'}></img>
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