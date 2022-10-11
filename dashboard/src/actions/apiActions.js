import axios from "axios"
const BASE_URL = 'http://localhost:4000'
let accessToken = window.localStorage.getItem('accessToken');
let refreshToken = window.localStorage.getItem('refreshToken');

axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken} ${refreshToken}` ;

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
                window.localStorage.setItem('accessToken', response2.data.token);
                window.localStorage.setItem('refreshToken', response2.data.refreshToken);
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

export const updateUser = (userinfo) => {
    accessToken = window.localStorage.getItem('accessToken');
    refreshToken = window.localStorage.getItem('refreshToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken} ${refreshToken}` ;
    return async (dispatch) => {
        try {
            console.log(userinfo);
            const response = await axios.post(`${BASE_URL}/api/updateUser`, userinfo)
            console.log(response)

            if (response.data.status === false) {
                dispatch({
                    type: 'UPDATE_PROFILE_FAILURE',
                    payload: response.data.message
                })
            } else {
                // login the user
                dispatch({
                    type: 'UPDATE_PROFILE_SUCCESS',
                    payload: response.data
                })

            }

        } catch (error) {
            dispatch({
                type: 'UPDATE_PROFILE_FAILURE',
                payload: error.response.data
            })
        }
    }
}

export const loginUser = (userinfo) => {
    accessToken = window.localStorage.getItem('accessToken');
    refreshToken = window.localStorage.getItem('refreshToken');

    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken} ${refreshToken}` ;
    return async (dispatch) => {
        try {
            console.log(userinfo)
            const response = await axios.post(`${BASE_URL}/auth/login`, userinfo)
            console.log(response)

            if(response.data.status === false){
                dispatch({
                    type: 'LOGIN_FAILURE',
                    payload: response.data.message
                })
            } else {
                // login the user
                window.localStorage.setItem('accessToken', response.data.token);
                window.localStorage.setItem('refreshToken', response.data.refreshToken);
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

export const verifyAccessToken = () => {
    accessToken = window.localStorage.getItem('accessToken');
    refreshToken = window.localStorage.getItem('refreshToken');

    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken} ${refreshToken}` ;
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/verifyAccessToken`, {
                'accessToken' : accessToken,
                'refreshToken': refreshToken
            })
            console.log(response)
            if(response.data.status === true){
                const response2 = await axios.get(`${BASE_URL}/api/getOneUser?email=${response.data.userInfo.email}`)
                dispatch({
                    type: 'VERIFY_ACCESS_TOKEN',
                    payload: response2.data
                })
            } else {
                dispatch({
                    type: 'LOGIN_FAILURE',
                    payload: response.data.message
                })
            }
        } catch (error) {
            dispatch({
                type: 'LOGIN_FAILURE',
                payload: error.message
            })
        }
    }
}

export const fetchAllEmployee = () => {
    accessToken = window.localStorage.getItem('accessToken');
    refreshToken = window.localStorage.getItem('refreshToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken} ${refreshToken}` ;
    return function(dispatch) {

        axios.get(BASE_URL + `/api/users?role=employee`, { headers: { Authorization: `Bearer ${accessToken} ${refreshToken}` } })
            .then(response => {
                console.log(response.data);
                dispatch({type: 'FETCH_ALLEMPLOYEE_SUCCESS', payload: response.data})
                dispatch({type: 'CLEAR_API_ERROR'})
            })
            .catch(error => {
                dispatch({type: 'FETCH_ERROR', payload: error.message})
            })
    }
}

export const fetchTodayTasks = (d) => {
    accessToken = window.localStorage.getItem('accessToken');
    refreshToken = window.localStorage.getItem('refreshToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken} ${refreshToken}` ;
    
    return async function(dispatch) {
        try {
            const date = new Date(d);
            date.toLocaleDateString();
            const response = await axios.post(BASE_URL + `/api/prevDayTasks`, {date: date}) ;
            if(response.data.status == true) {
                dispatch({type: 'FETCH_TODAYTASK_SUCCESS', payload: response.data})
            } else {
                dispatch({type: 'FETCH_ERROR', payload: response.data.message})
            }
            
        } catch (error) {
            dispatch({type: 'FETCH_ERROR', payload: error.message});
            
        }         
    }
}

export const fetchWeeklyTasks = (d) => {
    accessToken = window.localStorage.getItem('accessToken');
    refreshToken = window.localStorage.getItem('refreshToken');
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken} ${refreshToken}` ;
    
    return async function(dispatch) {
        try {
            const date = new Date(d);
            date.toLocaleDateString();
            const response = await axios.post(BASE_URL + `/api/weeklyTasks`, {date: date}) ;
            if(response.data.status == true) {
                dispatch({type: 'FETCH_WEEKLYTASK_SUCCESS', payload: response.data})
            } else {
                dispatch({type: 'FETCH_ERROR', payload: response.data.message})
            }
            
        } catch (error) {
            dispatch({type: 'FETCH_ERROR', payload: error.message});
            
        }         
    }
}


export const createTask = (task) => {
    return async function(dispatch) {
        try {
            const response = await axios.post(`${BASE_URL}/api/tasks`, task);
            console.log(response)
            if(response.data.status == true) {
                dispatch({type: 'TASK_CREATED', payload: response.data})
                
            } else {
                dispatch({type: 'FETCH_ERROR', payload: response.data.message})
            }
        } catch (error) {
            dispatch({type: 'FETCH_ERROR', payload: error.message})
        }
    }
}
