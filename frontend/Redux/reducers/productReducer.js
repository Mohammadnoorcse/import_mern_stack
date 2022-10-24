import {
     PRODUCT_LIST_FAILS, 
     PRODUCT_LIST_REQUEST, 
     PRODUCT_LIST_SUCCESS ,

     PRODUCT_DETAILS_REQUEST,
     PRODUCT_DETAILS_SUCCESS,
     PRODUCT_DETAILS_FAILS} from "../constants/productConstant";

// get all product jonno reducer 

export const productListReducer =(state ={products:[]},action) =>{

    switch(action.type){
        case PRODUCT_LIST_REQUEST: 
            return {loading:true,products:[]}
        case PRODUCT_LIST_SUCCESS:
            return {loading:false,products:action.payload}
        case PRODUCT_LIST_FAILS:
            return {loading:false,error:action.payload}
        default:
            return state;
    }

}
//get single product
// product:{review:[]} mane hocche productModel er bitore r ekta review model cilo seta soh niye aste cheyechii ei jonno ei rokom bhabe niye asechii..
//...state mane single product bitore sob asbe

export const productDetailsReducer =(state ={product:{reviews:[]}},action) =>{

    switch(action.type){
        case PRODUCT_DETAILS_REQUEST: 
            return {loading:true,...state}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading:false,product:action.payload}
        case PRODUCT_DETAILS_FAILS:
            return {loading:false,error:action.payload}
        default:
            return state;
    }

}