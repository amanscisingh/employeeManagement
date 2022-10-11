const initState = {
    userInfo: { // add user form
        role: 'employee',
        name: '',
        email: '',
        password: '',
        department:'',  
        contact: null,
        joining: null,
    },
    allEmployee: [],
    todayTasks: [],
    prevDayTasks: [],
    weeklyTasks: [],
    appControls: {
        isSyncing: false,
        isLoading: false,
        isError: false,
        errorMessage: '',
        controllerMode: 'approve', // approve, apply, profile
    },
    addTask: {
        description: '',
        type: 'meeting',
        startTime: '',
        duration: ''
    },
    isModalOpen: false,
    modalUser: ''
}


const dataReducer = (state=initState, action) => {
    switch (action.type) {
        case 'MODAL_OPEN':
            return {
                ...state,
                isModalOpen: true,
                modalUser: action.payload
            }

        case 'MODAL_CLOSE':
            return {
                ...state,
                isModalOpen: false,
                modalUser: ''
            }

        case 'TOGGLE_SYNCING':
            return {
                ...state,
                appControls : {
                    ...state.appControls,
                    isSyncing: true
                }
            }

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
        
        case 'UPDATE_DEPARTMENT':
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    department: action.payload
                }
            }

        
        case 'FETCH_ALLEMPLOYEE_SUCCESS':
            return {
                ...state,
                allEmployee: action.payload.users,
                isSyncing:false
            }

        case 'FETCH_TODAYTASK_SUCCESS':
            return {
                ...state,
                todayTasks: action.payload.todayTasks,
                prevDayTasks: action.payload.prevTasks,
                isSyncing:false
            }

        case 'FETCH_WEEKLYTASK_SUCCESS':
            return {
                ...state,
                weeklyTasks: action.payload.tasks,
                isSyncing:false
            }

        

        case 'UPDATE_FAILURE':
            return {
                ...state,
                appControls:{
                    ...state.appControls,
                    isError: true,
                    errorMessage: action.payload,
                    isSyncing:false
                }
            }


        case 'USER_ALREADY_EXISTS':
            return {
                ...state,
                appControls: {
                    ...state.appControls,
                    isError: true,
                    errorMessage: 'User Already Exists'
                },
                isSyncing:false
            }

        case 'CLEAR_ERROR':
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
                    role: 'employee',
                    name: '',
                    email: '',
                    password: '',
                    department:'',  
                    contact: null,
                    joining: null,
                },
                isSyncing: false
            }
        
        case 'UPDATE_DESCRIPTION':
            return {
                ...state,
                addTask: {
                    ...state.addTask,
                    description: action.payload
                }
            }

        case 'UPDATE_DESCRIPTION':
            return {
                ...state,
                addTask: {
                    ...state.addTask,
                    type: action.payload
                }
        }

        case 'UPDATE_START_TIME':
            return {
                ...state,
                addTask: {
                    ...state.addTask,
                    startTime: action.payload
                }
            }

        case 'UPDATE_DURATION':
            return {
                ...state,
                addTask: {
                    ...state.addTask,
                    duration: action.payload
                }
            }

        case 'UPDATE_TYPE':
            return {
                ...state,
                addTask: {
                    ...state.addTask,
                    type: action.payload
                }
            }


        case 'TASK_CREATED':
            return {
                ...state,
                addTask: {
                    description: '',
                    type: 'meeting',
                    startTime: '',
                    duration: ''
                }
            }

        case 'FETCH_ERROR':
            return {
                ...state,
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

export default dataReducer;