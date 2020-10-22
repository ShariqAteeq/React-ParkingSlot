const initialState = {
    parkings: []
  };
  
  const parkReducer = (state = initialState, action) => {
    switch (action.type) {
      case "Input_success":
        console.log('ip success');
        return state;
        case "Input_err":
          console.log('ip faid');
          return state;
      case "GET_DATA" :
        console.log('get succ')
        return {
          ...state,
          parkings: action.items
        }
    case "DELETE_PARKING":
        console.log('delete succ')
        return state;
      default:
          return state;
    }
   
  };
  
  export default parkReducer;
  