import {USER_REQUESTING_LOGIN,
        USER_LOGIN_SUCESS,
        USER_LOGIN_FAIL,
        USER_LOGOUT} from "../actions/types"


const loginReducer=(state={},action)=>{
    switch(action.type){
        case USER_REQUESTING_LOGIN:
            return {loading:true}
        
        case USER_LOGIN_SUCESS:
            return {loading:false,userInfo:action.payload}
        
        case USER_LOGIN_FAIL:
            return {loading:false,error:action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state

        
    }
}

export {
    loginReducer
}