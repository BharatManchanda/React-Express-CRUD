import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'X-Custom-Header': 'foobar'
    }
})

async function get(url, config={}) {
    return await api.get(url, {...config})
    .then((response) => response.data);
}

async function post(url, config={}) {
    console.log(config,"config");
    return await api.post(url, {...config})
    .then((response) => response.data);
}

async function put(url, config={}) {
    return await api.put(url, {...config})
    .then((response) => response.data);
}

async function del(url, config={}) {
    return await api.delete(url, {...config})
    .then((response) => response.data);
}

export { get, post, put, del }