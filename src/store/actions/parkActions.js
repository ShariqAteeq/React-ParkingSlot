import fire from '../../config/fire';

export const bookReserv = (newUser) => {
    return dispatch => {
        const uid = localStorage.getItem('userId');
         fire.firestore().collection("users").add({
             ...newUser,
             userId: uid,
           })
         .then(() => {
           dispatch({ type: "Input_success" });
         })
         .catch((err) => {
           dispatch({ type: "Input_err", err });
         });
     };
   };
 
   export const MyParkings = () => {
       return dispatch => {
           let data = fire.firestore().collection('users');
           data.onSnapshot( query => {
               const items = [];
             query.forEach(doc => {
                 let id = doc.id;
                 let data = doc.data();
                 items.push({id: id , ...data})
             })
             dispatch( { type : 'GET_DATA' , items} )
           })
       }
   }

   export const deleteParking = (id) => {
       return dispatch => {
           fire.firestore().collection('users').doc(id).delete()
           .then(() => {
               dispatch( {type : 'DELETE_PARKING'} )
           })
       }
   }

   