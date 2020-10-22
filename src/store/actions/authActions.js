import fire from '../../config/fire';

export const login = (email , password) => {
    return dispatch => {
        fire.auth().signInWithEmailAndPassword(email , password)
        .then((res)=>{
            console.log(res);
            localStorage.setItem('userId' , res.user.uid);
            let userId = res.user.uid;
            dispatch({ type: 'Login-success' , userId })
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

export const logout = () => {
    return dispatch => {
        fire.auth().signOut();
        localStorage.clear();
        dispatch( { type : 'logout' } )
    }
}

export const isLogged = () => {
    return dispatch => {
        let loading = true;
        fire.auth().onAuthStateChanged((user)=>{
            console.log(localStorage.getItem('userId'))
            if(user)
            {
                loading = false;
              dispatch( { type : 'isLogged' , loading } )
              
            }
          })
    }
}