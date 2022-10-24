import axios from 'axios'

import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../constants/userConstant'
export const login = (email,password) =>async dispatch =>{
    try {
        dispatch({type:USER_LOGIN_REQUEST})
        const config = {headers:{'contnet-type':'application/json'}}
        const {data} = await axios.post('/api/users/login',{email,password},config)

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data)) //eta diye local storage set kore
    } catch (error) {
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.message ?error.response.data.message:error.message
        })
    }
}