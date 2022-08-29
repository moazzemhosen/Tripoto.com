
import * as types from "./Action.types";

const initState = {
  data:[],
  isLoading:false,
  isError:false
};

export const appReduser = (state=initState, { type, payload }) => {
  switch (type) {
        case types.GETDATAREQUEST:
            return {...state,isLoading:true,isError:false};

        case types.GETDATASUCCESS:
            return {...state,isLoading:false,isError:false,data:payload};
        case types.GETDATAREQUEST:
            return {...state,isLoading:false,isError:true};
  
    default:
      return state;
  }
};