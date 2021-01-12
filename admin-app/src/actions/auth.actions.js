import axios from "../helpers/axios";
import { authConstants } from "./constants"
//export is default so we don't have to write exact name of the export

export const login=(user)=>{
    console.log(user);

    return async(dispatch)=>{

        const res=await axios.post('/admin/signin')
        dispatch({
            type:authConstants.LOGIN_REQUEST,
            payload:{
                ...user 

            }
            
        });




    }



}