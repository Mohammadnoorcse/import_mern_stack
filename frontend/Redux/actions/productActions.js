import {
    PRODUCT_LIST_FAILS,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_FAILS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS } from "../constants/productConstant";
import axios from "axios";
//get all product  jonno action
export const listProduct = () =>async(dispatch)=>{
        try {
            dispatch({type:PRODUCT_LIST_REQUEST})
            const {data} = await axios.get('/api/products')
            dispatch({type:PRODUCT_LIST_SUCCESS,payload:data})

            
        } catch (error) {
            dispatch({
                type:PRODUCT_LIST_FAILS,
                payload:error.response && error.response.data.message ?error.response.data.message:error.message
            })
        }
}

//get single product jonno action
export const listProductDetails = (id) =>async(dispatch)=>{
    try {
        dispatch({type:PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get(`/api/products/${id}`)
        dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data})

        
    } catch (error) {
        dispatch({
            type:PRODUCT_DETAILS_FAILS,
            payload:error.response && error.response.data.message ?error.response.data.message:error.message
        })
    }
}
