
import axios from "axios";
import { json } from "express";
import {CART_ADD_ITEM} from "../constants/cartConstant"

export const addToCart = (id,qty) = async(dispatch,getState) =>{
    const {data} = await axios.get(`/api/product/${id}`)
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
            product:data_id,
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            qty
        }
    })
    localStorage.getItem('cartItems',json.stringfy(getState().cart.cartItem));
}