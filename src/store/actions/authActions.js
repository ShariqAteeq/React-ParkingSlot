import fire from '../../config/fire';

export const login = (email , password) => {
    return dispatch => {
        fire.auth().signInWithEmailAndPassword(email , password)
        .then(()=>{
            dispatch({ type: 'Login-success' })
        }).catch(()=>{
            dispatch({ type: 'Login-error' })
        })
    }
}

export const signup = (email , password) => {
    return dispatch => {
        fire.auth().createUserWithEmailAndPassword(email , password)
        .then(()=>{
            dispatch({ type: 'signup-success' })
        }).catch(()=>{
            dispatch({ type: 'signup-error' })
        })
    }
}