import axios from "axios"
const BASE_URL = 'http://localhost:4000'

export const registerNewUser = (userinfo) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/register`, userinfo)
            console.log(response)

            if (response.data.status === false) {
                dispatch({
                    type: 'USER_ALREADY_EXISTS',
                    payload: response.data.message
                })
            } else {
                // login the user
                const loginData = {
                    user: userinfo.email,
                    user: userinfo.password
                }
                const response2 = await axios.post(`${BASE_URL}/auth/login`, loginData);
                loginData.token = response2.data.token;
                loginData.refreshToken = response2.data.refreshToken;
                loginData.name = userinfo.name;
                dispatch({
                    type: 'REGISTER_SUCCESS',
                    payload: loginData
                })

            }

        } catch (error) {
            dispatch({
                type: 'REGISTER_FAILURE',
                payload: error.response.data
            })
        }
    }
}

export const loginUser = (userinfo) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/login`, userinfo)
            console.log(response)

            if(response.data.status === false){
                dispatch({
                    type: 'LOGIN_FAILURE',
                    payload: response.data.message
                })
            } else {
                // login the user
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: response.data
                })
            }
        } catch (error) {
            dispatch({
                type: 'LOGIN_FAILURE',
                payload: error.response.data
            })
        }
    }
}

export const fetchAllTodos = (email) => {

    return function(dispatch) {
        dispatch({type: "TOGGLE_SYNCING"})

        axios.get(BASE_URL + `?email=${email}`)
            .then(response => {
                console.log(response.data)
                dispatch({type: 'FETCH_TODOS_SUCCESS', payload: response.data})
                dispatch({type: 'CLEAR_API_ERROR'})
            })
            .catch(error => {
                dispatch({type: 'FETCH_TODOS_ERROR', payload: error.message})
            })
    }
}

export const updateAllTodos = (email, body) => {
    return function(dispatch) {
        dispatch({type: "TOGGLE_SYNCING"})

        axios.post(BASE_URL+`?email=${email}`, body)
            .then(response => {
                console.log(response.data)
                dispatch({type: 'FETCH_TODOS_SUCCESS', payload: response.data})
                dispatch({type: 'CLEAR_API_ERROR'})
            })
            .catch(error => {
                dispatch({type: 'FETCH_TODOS_ERROR', payload: error.message})
            })

    }
}