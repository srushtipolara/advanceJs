import axios from 'axios'
import { api } from '../config'
// import { videoUploadStatus } from '../Components/VideoUploader/videoConstant'

// default
axios.defaults.baseURL = api.API_URL
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

// intercepting to capture errors
axios.interceptors.response.use(
    function (response) {
        return response.data ? response.data : response
    },
    function (error) {
        let message
        switch (error.response.status) {
            case 500:
                message = 'Internal Server Error'
                break
            case 401:
                message = 'Invalid credentials'
                localStorage.removeItem('authUser')
                window.location.href = '/login'
                break
            case 404:
                message = 'Sorry! the data you are looking for could not be found'
                break
            case 409:
                message = error.response.data.message || error
                break
            default:
                message = error.message || error
        }
        return Promise.reject(message)
    }
)

const setAuthorization = (token) => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

// intercepting to dynamically set the token
axios.interceptors.request.use(
    (config) => {
        const getToken = JSON.parse(localStorage.getItem('authUser'))
            ? JSON.parse(localStorage.getItem('authUser'))
            : null
        const token = getToken?.token?.token

        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

class APIClient {
    get = (url, params, headers) => {
        let response
        let paramKeys = []

        if (params) {
            Object.keys(params).map((key) => {
                paramKeys.push(key + '=' + params[key])
                return paramKeys
            })

            const queryString =
                paramKeys && paramKeys.length ? paramKeys.join('&') : ''
            response = axios.get(`${url}?${queryString}`, headers)
        } else {
            response = axios.get(`${url}`, headers)
        }
        return response
    }

    create = (url, data, config) => {
        return config ? axios.post(url, data, config) : axios.post(url, data)
    }

    // upload = (url, data, handleUploadStatus, videoType, setFileUploadStatus) => {
    //     const uploadUrl = api.UPLOAD_URL + url
    //     return axios
    //         .post(uploadUrl, data, {
    //             onUploadProgress: ({ loaded, total }) => {
    //                 handleUploadStatus &&
    //                 handleUploadStatus(videoType, ((loaded / total) * 100).toFixed(2))
    //                 setFileUploadStatus &&
    //                 setFileUploadStatus(videoUploadStatus.uploading)
    //             },
    //         })
    //         .catch((err) => {
    //             setFileUploadStatus(videoUploadStatus.fileUploadError)
    //         })
    // }

    // transaction = (url) => {
    //     const baseUrl = api.TRANSACTION_URL + url
    //     return axios.post(baseUrl)
    // }

    update = (url, data) => {
        return axios.patch(url, data)
    }

    put = (url, data, config) => {
        return config ? axios.put(url, data, config) : axios.put(url, data)
    }

    delete = (url, config) => {
        return axios.delete(url, config)
    }
}

const getLoggedinUser = () => {
    const user = localStorage.getItem('authUser')
    if (!user) {
        return null
    } else {
        return JSON.parse(user)
    }
}

export { APIClient, setAuthorization, getLoggedinUser }
