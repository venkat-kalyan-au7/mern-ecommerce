
import {USER_REQUESTING_REGISTER,USER_REGISTER_SUCESS,USER_REGISTER_FAIL,USER_LOGIN_SUCESS} from "../actions/types"
import axios from "axios"

const userRegisterAction=(name,email,password)=>async(dispatch)=>{
    try{

        dispatch({
            type:USER_REQUESTING_REGISTER,
        })

        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        const {data}= await axios.post('/api/users',{

            email,
            password,
            name
        },config)

        dispatch({
            type:USER_REGISTER_SUCESS,
            payload:data
        })

        dispatch({
            type: USER_LOGIN_SUCESS,
            payload: data,
          })

        localStorage.setItem("userInfo",JSON.stringify(data))


    }
    catch(error){

        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })

    }
}



export default userRegisterAction