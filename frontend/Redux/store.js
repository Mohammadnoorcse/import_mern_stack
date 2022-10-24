import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { productListReducer,productDetailsReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";
import { userLoginReducer } from "./reducers/userReducer";

//local storage jonno import
const cartItemsFromStorage = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]

const userInfoFromStorage = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null

const reducer = combineReducers({
    productList:productListReducer,    // ei khane productListReducer implement korbo
    productDetails:productDetailsReducer ,
    cart:cartReducer,
    userLogin:userLoginReducer
});

const initialState = {
    // cart:{cartItems:"techinfo"} 
    cart:{cartems:cartItemsFromStorage},
    userLogin:{userInfo:userInfoFromStorage}
};
const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

module.exports = store;