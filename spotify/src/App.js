import React, { useEffect, useState  } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './Spotify';

// 1:17:17
function App() {
  const [token, setToken] = useState(null);

  // run code based on a given condition
  useEffect( () =>{
    const hash = getTokenFromUrl();
     window.location.hash = "";
     const _token = hash.access_token

     if (_token){
       setToken(_token)
     }
     console.log('I have a token', token);
  }, []);
  return (
    <div className="app">
      { token ?  <h1>I am logged in</h1> : <Login /> }


    </div>
  );
}

export default App;
