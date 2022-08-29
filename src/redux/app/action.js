
import axios from "axios";
import * as types from "./Action.types";
export const getData=(params)=>(dispatch)=>{
    dispatch({type:types.GETDATAREQUEST});

    axios.get("https://netmed-clone-v1-server.herokuapp.com/patient",params).then((res)=>{
        // console.log(res.data);
        dispatch({type:types.GETDATASUCCESS,payload:res.data})
    }).catch((er)=>{
        dispatch({type:types.GETDATAERROR})
    })

}