import React from 'react'
import {Link,  redirect } from 'react-router-dom'
import {Form,Button,Row,Col} from "react-bootstrap"
import {useDispatch,useSelector} from 'react-redux'
import Message from "../components/shared/Message"
import Loader from "../components/shared/Loader"
import {login} from "../../Redux/actions/userAction"
import { useState } from 'react'
import FromContainer from '../components/shared/FromContainer'

function LoginScreen({location}) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const redirect = location.search ? location.search.split('=')[1] :'/';
   
    const submitHandler = (e) =>{
      e.preventDefault()
    }

  return (
    <>
      <FromContainer>
        <h1>Sign In </h1>
        <Form onSubmit = {submitHandler}>
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' value ={email} onChange = {(e) =>setEmail(e.target.value)}></Form.Control>

            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Label>password Address</Form.Label>
              <Form.Control type='password' placeholder='Enter password' value ={password} onChange = {(e) =>setPassword(e.target.value)}></Form.Control>

            </Form.Group>

            <Button type = "submit" varient = "primary">SING IN</Button>
        </Form>
        <Row>
          <Col>
          New Customer ?
          <Link to ={redirect ? `register?redirect = ${redirect}`:'/register'}></Link>
          
          </Col>
        </Row>
      </FromContainer>
    </>
  )
}

export default LoginScreen
