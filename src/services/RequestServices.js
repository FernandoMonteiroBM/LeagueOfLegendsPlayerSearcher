import axios from 'axios'

export async function request(url, method, headers, body) {
    const config = {
        method, 
        url,
        headers,
        data: body
    }
    if (!body || (body && Object.keys(body).length === 0)) {
        delete config.data
    }
    try {
        const instance = axios.create()
        const result = await instance(config)
        return result
    } catch (error) {
        return{
            message: 'Error',
            error
        }
    }
}