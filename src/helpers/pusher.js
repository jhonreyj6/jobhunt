import Echo from 'laravel-echo';
import Pusher from 'pusher-js'
window.Pusher = Pusher;


window.Echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true,
    encrypted: true,
    // added
    authEndpoint: import.meta.env.VITE_PUSHER_ENDPOINT,
    // auth: {
    //   headers: {
    //       // Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token,
    //       Authorization:  JSON.parse(localStorage.getItem('user')) ? 'Bearer ' + JSON.parse(localStorage.getItem('user')).access_token : 'null',
    //   },
    // },
});