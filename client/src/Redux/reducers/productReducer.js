import {PRODUCTS_FOUND,
    PRODUCTS_NOT_FOUND,
    REQUESTING_PRODUCTS} from "../actions/types"

    

const productListReducer = (state={
    products:[]
},action)=>{
    switch(action.type){
        case REQUESTING_PRODUCTS:
            return {
                loading:true,
                products:[]
            }
        
        case PRODUCTS_FOUND:
            return{
                loading:false,
                products:action.payload
            }
        
        case PRODUCTS_NOT_FOUND:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state

    }
}


export {productListReducer}