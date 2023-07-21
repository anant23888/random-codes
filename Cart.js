import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {remove} from "../store/cartSlice";
export const Cart = () => {
  const products=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
  const removeP=(product)=>{
    dispatch(remove(product))
  }
  const cards=products.map(product=> (
    <div className="col-md-12" styles={{marginBottom:"10px"}}>
    <Card key={product.id} className='h-100'>
      <div className='text-center'>
  <Card.Img variant="top" src={product.image} style={{height:'100px',width:'130px'}}/>
  </div>
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text>
      {product.description}
    </Card.Text>
    <Button variant="primary" style={{background:'red',color:'white'}} onClick={()=>removeP(product)}>Remove Item</Button>
  </Card.Body>
</Card>
    </div>
))
  return (
    <div>
      <h1>Cart</h1>
       <div className='row' >
        {cards}
    </div>
    </div>
  )
}
