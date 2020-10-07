import fire from '../../config/fire';

export const login = (email , password) => {
    return dispatch => {
        fire.auth().signInWithEmailAndPassword(email , password)
        .then((res)=>{
            console.log(res);
            localStorage.setItem('userId' , res.user.uid);
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

export const bookReserv = (newUser) => {
   return dispatch => {
       const uid = localStorage.getItem('userId');
        fire.firestore().collection("users").add({
            name : newUser,
            id: uid,
          })
        .then(() => {
          dispatch({ type: "Input_success" });
        })
        .catch((err) => {
          dispatch({ type: "Input_err", err });
        });
    };
  };



export const logout = () => {
    return dispatch => {
        fire.auth().signOut();
        localStorage.clear();
        dispatch( { type : 'logout' } )
    }
}

export const isLogged = () => {
    return dispatch => {
        fire.auth().onAuthStateChanged((user)=>{
            console.log(localStorage.getItem('userId'))
            if(user)
            {
              dispatch( { type : 'isLogged' } )
            }
          })
    }
}