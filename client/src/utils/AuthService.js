import decode from 'jwt-decode';
import history from '../history';
import auth0 from 'auth0-js';
// import Auth0Lock from 'auth0-lock'
const ID_TOKEN_KEY = 'id_token';
const ACCESS_TOKEN_KEY = 'access_token';


const CLIENT_ID = 'VvSoOpf5AAZoZ2HtvPhe0CuMCHInBXWN';
const CLIENT_DOMAIN = 'desmondtoye.auth0.com';
//this call back must alway be 3000 same with React port and added to the auth0 call back on their site
const REDIRECT = 'http://localhost:3000/callback';
const SCOPE = 'openid profile';
const AUDIENCE = 'https://desmondtoye.auth0.com/userinfo';

var auth = new auth0.WebAuth({
    clientID: CLIENT_ID,
    domain: CLIENT_DOMAIN
});

//ADDED START
// var lock = new Auth0Lock(CLIENT_ID, CLIENT_DOMAIN);

// Listen for the authenticated event and get profile


// ADDED END

export function login() {
    auth.authorize({
        responseType: 'token id_token',
        redirectUri: REDIRECT,
        audience: AUDIENCE,
        scope: SCOPE
    });
}

export function logout() {
    clearIdToken();
    clearAccessToken();
    history.push('/');
    window.location.href = "/";
}

export function requireAuth(nextState, replace) {
    if (!isLoggedIn()) {
        replace({ pathname: '/' });
    }
}

export function getIdToken() {
    return localStorage.getItem(ID_TOKEN_KEY);
}

export function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}

function clearIdToken() {
    localStorage.removeItem(ID_TOKEN_KEY);
}

function clearAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// Helper function that will allow us to extract the access_token and id_token
function getParameterByName(name) {
    let match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

// Get and store access_token in local storage
export function setAccessToken() {
    let accessToken = getParameterByName('access_token');
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

// Get and store id_token in local storage
export function setIdToken() {
    let idToken = getParameterByName('id_token');
    localStorage.setItem(ID_TOKEN_KEY, idToken);
}

export function isLoggedIn() {
    const idToken = getIdToken();
    return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
    const token = decode(encodedToken);
    if (!token.exp) { return null; }

    const date = new Date(0);
    date.setUTCSeconds(token.exp);

    return date;
}

function isTokenExpired(token) {
    const expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
}


// this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
//     if (error) {
//         // tmp error handling
//         alert(`Auth service 2: ${error}`);
//         return;
//     }

//     profile.user_metadata = profile.user_metadata || {};

//     this.storage.set('profile', JSON.stringify(profile));
//     this.user = profile;
// });