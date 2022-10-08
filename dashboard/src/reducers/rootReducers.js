const initState = {
    loginInfo: {
        isloggedIn: false,
        accessToken: '',
        refreshToken: '',
        errorMessage: '',
        user: null // put same userinfo there
    },
    userInfo: {
        role: 'employee',
        name: 'Aman Singh',
        email: '',
        password: '',
        contact: null,
        joining: null
    },
    appControls: {
        isSyncing: false,
        isLoading: false,
        isError: false,
        errorMessage: '',
        controllerMode: 'approve', // approve, apply, profile
    }
}


const rootReducer = (state=initState, action) => {
    switch (action.type) {
        case 'UPDATE_ROLE':
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    role: action.payload ? 'admin' : 'employee'
                }
            }

        case 'UPDATE_NAME':
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    name: action.payload
                }
            }


        case 'UPDATE_EMAIL':
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    email: action.payload
                }
            }

        case 'UPDATE_PASSWORD':
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    password: action.payload
                }
            }

        case 'UPDATE_CONTACT':
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    contact: action.payload
                }
            }

        case 'UPDATE_JOINING':
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    joining: action.payload
                }
            }

        case 'TOGGLE_CONTROLLER_MODE_APPROVE':
            return {
                ...state,
                appControls: {
                    ...state.appControls,
                    controllerMode: 'approve'
                }
            }

        case 'TOGGLE_CONTROLLER_MODE_PROFILE':
            return {
                ...state,
                appControls: {
                    ...state.appControls,
                    controllerMode: 'profile'
                }
            }

        case 'TOGGLE_CONTROLLER_MODE_APPLY':
            return {
                ...state,
                appControls: {
                    ...state.appControls,
                    controllerMode: 'apply'
                }
            }

        case 'USER_ALREADY_EXISTS':
            return {
                ...state,
                appControls: {
                    ...state.appControls,
                    isError: true,
                    errorMessage: 'User already exists'
                }
            }

        case 'CLEAR_ERROR_MESSAGE':
            return {
                ...state,
                appControls: {
                    ...state.appControls,
                    isError: false,
                    errorMessage: ''
                }
            }


        case 'REGISTER_SUCCESS':
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    name: action.payload.name,
                    email: action.payload.email,
                },
                loginInfo: {
                    ...state.loginInfo,
                    isloggedIn: true,
                    accessToken: action.payload.token,
                    refreshToken: action.payload.refreshToken,
                    errorMessage: ''
                }
            }

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loginInfo: {
                    ...state.loginInfo,
                    isloggedIn: true,
                    accessToken: action.payload.token,
                    refreshToken: action.payload.refreshToken,
                    errorMessage: ''
                }
            }

        case 'LOGIN_FAILURE':
            return {
                ...state,
                loginInfo: {
                    ...state.loginInfo,
                    isloggedIn: false,
                    accessToken: '',
                    refreshToken: '',
                    errorMessage: action.payload
                },
                appControls: {
                    ...state.appControls,
                    isError: true,
                    errorMessage: action.payload
                }
            }

        
        default:
            return state;

        }

}

module.exports = rootReducer;