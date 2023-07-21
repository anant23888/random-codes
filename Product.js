import React from 'react';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import {add} from "../store/cartSlice";
const Product = () => {
  const dispatch=useDispatch();
    const [products,getProducts]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(data=> data.json()).then(result=>getProducts(result))
    },[]);
    const addToCart=(product)=>[
      dispatch(add(product))
    ]
    const cards=products.map(product=> (
        <div className="col-md-3" style={{marginBottom:"10px"}}>
        <Card key={product.id} className='h-100'>
          <div className='text-center'>
      <Card.Img variant="top" src={product.image} style={{height:'100px',width:'130px'}}/>
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
      </Card.Body>
    </Card>
    </div>
    ))
  return (
    <>
    <h1>Products Dashboard</h1>
    <div className='row' >
        {cards}
    </div>
    </>
  )
}
export default Product;