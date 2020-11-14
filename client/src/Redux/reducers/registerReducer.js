import {USER_REQUESTING_REGISTER,USER_REGISTER_SUCESS,USER_REGISTER_FAIL} from "../actions/types"

const registerReducer=(state={},action)=>{
    switch(action.type){
        case USER_REQUESTING_REGISTER:
            return {loading:true}
        
        case USER_REGISTER_SUCESS:
            return {loading:false,userInfo:action.payload}
        
        case USER_REGISTER_FAIL:
            return {loading:false,error:action.payload}
        
        default:
            return state

        
    }
}

export {
    registerReducer
}