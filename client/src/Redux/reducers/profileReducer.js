import {USER_REQUESTING_PROFILE,USER_PROFILE_SUCESS,USER_PROFILE_FAIL} from "../actions/types"

const profileReducer=(state={user:{}},action)=>{
    switch(action.type){
        case USER_REQUESTING_PROFILE:
            return {loading:true,...state}
        
        case USER_PROFILE_SUCESS:
            return {loading:false,user:action.payload}
        
        case USER_PROFILE_FAIL:
            return {loading:false,error:action.payload}
        
        default:
            return state

        
    }
}

export default profileReducer