
import axios from "axios";
import * as types from "./Action.types";

export const register = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  return axios
    .post("https://netmed-clone-v1-server.herokuapp.com/signup", payload)
    .then((r) => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: r.data });
      return types.REGISTER_SUCCESS;
    })
    .catch((er) => {
      dispatch({ type: types.REGISTER_ERROR });
      return types.REGISTER_ERROR;
    });
};

export const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("https://reqres.in/api/login",{
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    })
    .then((r) => {
        console.log(r);
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
      return{ message:types.LOGIN_SUCCESS,token:r.data.token,user:payload.username};
    })
    .catch((er) => {
      dispatch({ type: types.LOGIN_ERROR });

      return {err:types.LOGIN_ERROR,message:er};
    });
};
export const logout = () => (dispatch) => {
  dispatch({ type: types.LOGOUT});
 }


