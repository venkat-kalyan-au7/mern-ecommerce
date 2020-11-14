import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    SINGLE_PRODUCT_FAIL,
    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_SUCCESS
  } from '../actions/types'
  
const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, products: [] }
      case PRODUCT_LIST_SUCCESS:
        return { loading: false, products: action.payload }
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


const singleProductReducer=(state = { product:{reviews:[]} }, action) => {
  switch(action.type){
    case SINGLE_PRODUCT_REQUEST:
      return {loading:true,...state}
    
    case SINGLE_PRODUCT_SUCCESS:
      return {loading:false,product:action.payload}
    
    case SINGLE_PRODUCT_FAIL:
      return {loading:false,error:action.payload}
    
    default:
      return state
  }

}

export {productListReducer,
        singleProductReducer} 