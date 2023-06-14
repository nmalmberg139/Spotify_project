// https://developer.spotify.com/documentation/web-playback-sdk/tutorials/getting-started

// once button clicks, this endpoint will clarify who is logging in
export const authEndpoint = "https://accounts.spotify.com/authorize";

// once logged in, redirect back to homepage
const redirectUri = "http://localhost:3000/";
const clientId = "49e5ca9cb2e34b78a93e6ee29dafc741"

// used to read, write, and delete creators settings on the page
// this case, only using the read and modify setting, to let users listen to the songs.
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
        // split the first string(=) 
        var parts = item.split("=");
        // get the access token, decode it from the rest
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join( "%20" )}&response_type=token&show_dialog=true`;