let username = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).username
  : "";
let password = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).password
  : "";

export const initialState = {
  username: "" || username,
  password: "" || password,
  connected: false,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
        connected: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        connected: true,
        username: action.payload.username,
        password: action.payload.password,
        loading: false,
        errorMessage: null,
      };
    case "LOGOUT":
      return {
        ...initialState,
        username: "",
        password: "",
        connected: false,
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
        connected: false,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
