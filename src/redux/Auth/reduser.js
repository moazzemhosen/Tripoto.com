import { loadData, removeData, saveData } from "../../utils/localStorage";
import * as types from "./Action.types";

const initState = {
  token: loadData("token") || "",
  isAuth: !!loadData("token") || false,
// isAuth:true,
  loading: false,
  error: false,
  user:loadData("user")||{}
};

export const authReduser = (state=initState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return { ...state, loading: true ,error:false};

    case types.LOGIN_SUCCESS:
      saveData("token", payload);
      console.log(payload,"payload")
      return { ...state, token: payload, loading: false,error:false,isAuth:true };

      case types.LOGIN_ERROR:
        return {...state,loading:false,error:true};
    case types.SETUSER:
        saveData("user", payload);
        return {...state,user:payload};
    case types.LOGOUT:
        removeData("token");
        removeData("user")
        return{
            ...state,user:{},token:"",isAuth:false
        }
    default:
      return state;
  }
};