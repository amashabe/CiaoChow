const initState = {
    isLoggedIn: false,
    auth_token: null,
    food: null,
    error: null,
    isLoading: false
}

export default function (state = initState, action) {
    switch (action.type) {
        case 'SET_USER_TOKEN':
            return { ...state, auth_token: action.payload }
        case 'SET_AUTHENTICATED_USER':
            return { ...state, isLoggedIn: action.payload }
        case 'SET_FOOD':
            return { ...state, food: action.payload }
        case 'SET_LOADING':
            return { ...state, isLoading: action.payload }
        case 'SET_ERROR':
            return { ...state, error: action.payload }
        case 'CLEAR_ERROR':
            return { ...state, error: null }
        default:
            return state;
    }
}