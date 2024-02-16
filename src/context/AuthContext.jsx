import { useContext, createContext, useReducer } from "react";
const AuthContext = createContext();
const FAKE_ACCOUNT = {
  name: "Emad Ismail Mohammed",
  email: "emadxd22@gmail.com",
  password: "123456",
  photo: "https://i.pravatar.cc/48?u=118836",
};
const INIT_STATE = {
  user: null,
  isAuthenticated: false,
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "account/login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "account/failed":
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    case "account/logout":
      return { ...INIT_STATE };
    default:
      throw new Error("Unkown action");
  }
}

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const { user, isAuthenticated, error } = state;
  function Login(email, password) {
    if (email === FAKE_ACCOUNT.email && password === FAKE_ACCOUNT.password) {
      dispatch({ type: "account/login", payload: FAKE_ACCOUNT });
    } else {
      dispatch({
        type: "account/failed",
        payload: "Invalid password or email please try agian",
      });
    }
  }
  function Logout() {
    dispatch({ type: "account/logout" });
  }
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, error, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuht() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("the context used outside provider scope");
  else return context;
}
