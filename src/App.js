import {useEffect, useState } from 'react';
import './App.css';
import Route from './components/Route/Route';
import { auth } from './utils/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import userContext from './utils/authenticationContext'
import { Provider } from 'react-redux';
import store from './utils/store';
function App() {
  const [profile , setProfile] = useState({})
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setProfile(user)
      } else {
        setProfile({})
      }
    });
  },[])

  return (
    <Provider store={store}>
    <userContext.Provider value={profile}>
    <div style={{width:'1vw%',height:'100vh'}}>
      <Route />
    </div>
    </userContext.Provider>
    </Provider>
  );
}

export default App;
