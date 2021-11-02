import axios from 'axios'// Aun no se como funciona xd
// Axios permite las peticiones a las rutas creadas
const instance = axios.create({
    baseURL: 'http://localhost:8040/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default instance
