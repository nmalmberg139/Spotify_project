import React, { useEffect,} from 'react';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './DataLayer';

// 2:16:06

// communicating with Spotify API
const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token },  dispatch] = useDataLayerValue();

  // run code based on a given condition
  useEffect( () =>{
    const hash = getTokenFromUrl();
     window.location.hash = "";
     const _token = hash.access_token

     if (_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      //  setToken(_token)

       // getting the token to the spotify api from react
       spotify.setAccessToken(_token);


       spotify.getMe().then(user =>{
        // Pop in a user from the dataLayer component and reading the data
        dispatch({
          type: "SET_USER",
          user: user,
        })
       })
     }
  }, []);

  return (
    <div className="app">
      { token ?  <Player spotify={spotify} /> : <Login /> }


    </div>
  );
}

export default App;
