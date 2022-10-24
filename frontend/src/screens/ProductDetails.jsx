import React,{useEffect, useState} from 'react'

import {Row,ListGroup,Button,Col,Image, ListGroupItem,From} from "react-bootstrap"
import Rating from '../components/Rating';
import { Link, useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { listProductDetails } from '../../Redux/actions/productActions';


const ProductDetails = ({history,match}) => {
    const [qty,setQty] = useState(1)
    const { id } = useParams();
    

    const dispatch = useDispatch();
    const productDetails = useSelector(state=>state.ProductDetails);
    const {loading,error,product} = productDetails;
  
    useEffect(()=>{
      dispatch(listProductDetails(id))
      
     
    },[dispatch,id]);

    const addCartHandler = ()=>{
      history.push(`/cart/${id}?qty=${qty}`)
    }

  
  return (
    <div>
        <Link to="/" >GO BACK</Link>
      <Row>
        <Col md={6}>
           <Image src={product.image} alt={product.name} fluid/> 
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroupItem>
                    <h1>{product.name}</h1>
                </ListGroupItem>
                <ListGroupItem>
                    <Rating value={product.rating} text={product.numReviews}/>
                </ListGroupItem>
                <ListGroupItem>Price: ${product.price}</ListGroupItem>
                <ListGroupItem>{product.description}</ListGroupItem>
            </ListGroup>
        </Col>
        <Col md={3}>
        <ListGroupItem>
            <Row>
                <Col> Status : </Col>
                <Col>{product.countInStock >0 ? "In Stock" : "out of stock"}</Col>
            </Row>
        </ListGroupItem>
        {
          product.countInStock>0 &&(
            <ListGroupItem>
              <Row>
                <Col>Qty</Col>
                <From.Control as = 'select' value={qty} onChange = {(e)=>setQty(e.target.value)}>
                  {
                    [...Array(product.countInStock).keys()].map((x) =>(
                      <option key={x+1} value ={x+1}>{x+1}</option>
                    ))
                  }

                </From.Control>
              </Row>
            </ListGroupItem>
          )
        }


        <ListGroupItem>
            <Button className='btn-block' type='button' onClick={addCartHandler}>Add to cart</Button>
        </ListGroupItem>
        </Col>
      </Row>
    </div>
  )
}

export default ProductDetails
