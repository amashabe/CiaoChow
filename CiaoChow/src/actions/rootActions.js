var myHeaders = new Headers();

export const setStatetoNull = () => (dispatch, getState) => {
    dispatch({ type: 'SET_LOADING', payload: false });
    dispatch({ type: 'SET_ERROR', payload: null });
}

export const setAuthToken = (token) => (dispatch, getState) => {
    dispatch({ type: 'SET_USER_TOKEN', payload: token });
    dispatch({ type: 'SET_AUTHENTICATED_USER', payload: true });
}

export const registerUser = (username, email, password) => (dispatch, getState) => {
    myHeaders.append("Content-Type", "application/json");

    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });

    var raw = JSON.stringify({ "username": username, "email": email, "password": password });
    var requestOptions = { method: 'POST', headers: myHeaders, body: raw, redirect: 'follow' };

    fetch("https://ciaochow.plusnarrative.biz/api/auth/local/register", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (email === null || password === null || username === null) {
                dispatch({ type: 'SET_ERROR', payload: `Mandatory field should not be null` });
                dispatch({ type: 'SET_LOADING', payload: false })
            } else if (result?.error?.message === 'Email is already taken') {
                dispatch({ type: 'SET_ERROR', payload: result.error.message });
                dispatch({ type: 'SET_LOADING', payload: false })
            } else if (result?.error?.message === 'An error occurred during account creation') {
                dispatch({ type: 'SET_ERROR', payload: "Username already taken." });
                dispatch({ type: 'SET_LOADING', payload: false })
            } else if (result?.error?.status === 400) {
                dispatch({ type: 'SET_ERROR', payload: 'Invalid email or password.' });
                dispatch({ type: 'SET_LOADING', payload: false })
            } else {
                dispatch({ type: 'SET_LOADING', payload: false })
                dispatch(setAuthToken(result.jwt))
            }
        })
        .catch(error => console.log('error', error));

}

export const loginUser = (email, password) => (dispatch, getState) => {
    myHeaders.append("Content-Type", "application/json");

    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });

    var raw = JSON.stringify({ "identifier": email, "password": password });
    var requestOptions = { method: 'POST', headers: myHeaders, body: raw, redirect: 'follow' };

    fetch("https://ciaochow.plusnarrative.biz/api/auth/local", requestOptions)
        .then(response => response.json())
        .then(result => {
            if (email === null || password === null) {
                dispatch({ type: 'SET_ERROR', payload: `Email or password can not be null.` });
                dispatch({ type: 'SET_LOADING', payload: false })
            }
            else if (result?.error?.status === 400) {
                dispatch({ type: 'SET_ERROR', payload: 'Invalid email or password.' });
                dispatch({ type: 'SET_LOADING', payload: false })
            } else {
                dispatch({ type: 'SET_LOADING', payload: false })
                dispatch(setAuthToken(result.jwt))
            }
        }).catch(error => console.log('error', error));
}

export const getCiaoChow = () => (dispatch, getState) => {
    const { auth_token } = getState().auth;
    myHeaders.append("Authorization", `bearer ${auth_token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://ciaochow.plusnarrative.biz/api/chows?populate=*", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result,'resultresultresultresultresultresultresultresultresultresultresultresultresult')
            dispatch({ type: 'SET_FOOD', payload: result.data })
        })
        .catch(error => console.log('error', error));
}