import axios from "../helpers/axios";
import { authConstants } from "./constants"
//export is default so we don't have to write exact name of the export

export const login=(user)=>{
    console.log(user);

    return async(dispatch)=>{
        //cors:cross origin resource share policy
         
        
        dispatch({type:authConstants.LOGIN_REQUEST});
        const res=await axios.post('/admin/signin',{
                ...user


         });

         if(res.status===200){
             const {token,user}=res.data;
             localStorage.setItem('token',token);
             dispatch({
                 type:authConstants.LOGIN_SUCCESS,
                 payload:{
                     token,user
                 }
             });
         }
         else
         {
             if(res.status==400){
                 dispatch({

                    type:authConstants.LOGIN_FAILURE,
                    payload:{
                        error:res.data.error
                    }


                 });
             }
         }

       




    }



}