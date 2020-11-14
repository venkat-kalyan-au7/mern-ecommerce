import {USER_REQUESTING_LOGIN,USER_LOGIN_SUCESS,USER_LOGIN_FAIL,USER_LOGOUT} from "./types"

import axios from "axios"

const userLoginAction=(email,password)=>async(dispatch)=>{
    try{

        dispatch({
            type:USER_REQUESTING_LOGIN,
        })

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        const {data}= await axios.post('/api/users/login',{

            email,
            password
        },config)

        dispatch({
            type:USER_LOGIN_SUCESS,
            payload:data
        })

        localStorage.setItem("userInfo",JSON.stringify(data))


    }
    catch(error){

        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })

    }
}



const userLogoutAction=()=>async(dispatch)=>{
    localStorage.removeItem("userInfo")
    dispatch({
        type:USER_LOGOUT
    })
}

export {
    userLoginAction,
    userLogoutAction
}