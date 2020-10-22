const initialState = {
  auth: false,
  userId: '',
  loading : false,
  parkings: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Login-success":
      console.log("log-success", action.userId);
      return {
        ...state,
        auth: true,
        userId: action.userId
      };
    case "Login-error":
      console.log("log-err");
      return {
        ...state,
        auth: false,
      };
      case "signup-success":
      console.log("sign-success");
      return {
        ...state,
        auth: true,
      };
    case "signup-error":
      console.log("sign-err");
      return {
        ...state,
        auth: false,
      };
    case "logout":
      console.log('logout success');
      return {
        ...state,
        auth: false
      }
    case "isLogged":
      return {
        ...state,
        auth: true,
        loading: action.loading
      }
    case "LOADER":
      return {
        ...state,
        auth: true,
        loading: action.loading
      } 
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
    default:
        return state;
  }
 
};

export default authReducer;
