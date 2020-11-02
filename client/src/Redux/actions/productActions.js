import {PRODUCTS_FOUND,PRODUCTS_NOT_FOUND,REQUESTING_PRODUCTS} from "./types"

import axios from "axios"

const GetProducts=()=>async(dispatch)=>{
    try{
        dispatch({type:REQUESTING_PRODUCTS})

        const {data}= await axios.get('/api/products')

        dispatch({type:PRODUCTS_FOUND,
                payload:data})
        
        
    }
    catch(error){
        dispatch({
            type:PRODUCTS_NOT_FOUND,
            payload:error.response && error.response.data.message ? error.response.data.message:error.message
        })
    }
}


export {
    GetProducts
}