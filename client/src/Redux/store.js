import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer,
        singleProductReducer} from "./reducers/productReducer"
import {cartReducer} from "./reducers/cartReducer"
import {loginReducer} from "./reducers/authReducer"
import {registerReducer} from "./reducers/registerReducer"
import profileReducer from "./reducers/profileReducer"

const reducer = combineReducers({
    productList:productListReducer,
    singleProduct:singleProductReducer,
    cart:cartReducer,
    loggedInUser:loginReducer,
    userRegistration:registerReducer,
    profileInfo:profileReducer
})


const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

  const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  :null

const initialState = {
  cart: { cartItems: cartItemsFromStorage },

  loggedInUser:{user:userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store