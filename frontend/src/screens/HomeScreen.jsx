import React,{useEffect} from 'react'

// import { products } from '../Data/product'
import { useDispatch,useSelector } from 'react-redux'
import { listProduct } from '../../Redux/actions/productActions'
import {Row,Col} from "react-bootstrap"
import ProductScreen from './ProductScreen'
import Loader from '../components/shared/Loader'
import Message from '../components/shared/Message'
const HomeScreen = () => {
 
  const dispatch = useDispatch();
  const productList = useSelector(state =>state.productList);
  const {loading,error,products}  = productList 

  
  useEffect(()=>{
   
    dispatch(listProduct())
   
  },[dispatch])

  return (
    <>
    {
      loading ?<Loader/> :error? <Message variant='danger'>{error}</Message>: <Row>
      {products.map(product =>{
        return(
          <Col md={3} key={product._id}>
            <ProductScreen product ={product}/>
        </Col>
        )
      })}
    </Row>
    }
   
      
    </>
  )
}

export default HomeScreen
