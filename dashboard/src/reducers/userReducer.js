const initState = {
    isloggedIn: false,
    email: '',
    password:'',
    errorMessage: '',
    user: null, // put same userinfo there
    updateInfo: {
        name: '',
        email: '',
        password: '',
        department:'technical',  
        contact: null,
        joining: null,
        password2:''
    },
    isError: false,
    errorMessage: ''
}


const userReducer = (state=initState, action) => {
    switch (action.type) {

        case 'UPDATE_LOGIN_EMAIL':
            return {
                ...state,
                email: action.payload            
            }

        case 'UPDATE_LOGIN_PASSWORD':
            return {
                ...state,
                password: action.payload            
            }


        case 'CLEAR_ERROR_MESSAGE':
            return {
                ...state,
                errorMessage: ''            
            }

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload.userInfo,
                isloggedIn : true,
                updateInfo: {
                    name: action.payload.userInfo.name,
                    email: action.payload.userInfo.email,
                    password: '',
                    department:action.payload.userInfo.department,  
                    contact: action.payload.userInfo.contact,
                    joining: action.payload.userInfo.joining,
                    password2:''
                }
            }

        case 'VERIFY_ACCESS_TOKEN':
            return {
                ...state,
                user: action.payload.userInfo,
                isloggedIn : true,
                updateInfo: {
                    name: action.payload.userInfo.name,
                    email: action.payload.userInfo.email,
                    password: '',
                    department:action.payload.userInfo.department,  
                    contact: action.payload.userInfo.contact,
                    joining: action.payload.userInfo.joining,
                    password2:''
                }
            }

        case 'LOGIN_FAILURE':
            return {
                ...state,
                errorMessage: action.payload,
            }

        case 'UPDATE_PROFILE_SUCCESS':
            return {
                ...state,
                user: action.payload.userInfo,
                updateInfo: {
                    name: action.payload.userInfo.name,
                    email: action.payload.userInfo.email,
                    password: '',
                    department:action.payload.userInfo.department,  
                    contact: action.payload.userInfo.contact,
                    joining: action.payload.userInfo.joining,
                    password2:''
                },
                isError: false,
                errorMessage: ''
            }
        
        case 'UPDATE_PROFILE_SUCCESS':
            return {
                ...state,
                isError: true,
                errorMessage: action.payload
            }    

        ////

        case 'CHANGE_NAME':
            return {
                ...state,
                updateInfo: {
                    ...state.updateInfo,
                    name: action.payload
                }
            }


        case 'CHANGE_EMAIL':
            return {
                ...state,
                updateInfo: {
                    ...state.updateInfo,
                    email: action.payload
                }
            }

        case 'CHANGE_PASSWORD':
            return {
                ...state,
                updateInfo: {
                    ...state.updateInfo,
                    password: action.payload
                }
            }

        case 'CHANGE_PASSWORD2':
            return {
                ...state,
                updateInfo: {
                    ...state.updateInfo,
                    password2: action.payload
                }
            }

        case 'CHANGE_CONTACT':
            return {
                ...state,
                updateInfo: {
                    ...state.updateInfo,
                    contact: action.payload
                }
            }

        case 'CHANGE_JOINING':
            return {
                ...state,
                updateInfo: {
                    ...state.updateInfo,
                    joining: action.payload
                }
            }
        
        case 'CHANGE_DEPARTMENT':
            return {
                ...state,
                updateInfo: {
                    ...state.updateInfo,
                    department: action.payload
                }
            }


        ////
        
        default:
            return state;

        }

}

export default userReducer;