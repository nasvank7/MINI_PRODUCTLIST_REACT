import React, { useState } from 'react'
import{ shop }from './product_data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = () => {
    const [items,setItems]=useState(shop)
    const decre=(id)=>{
        const newItems = items.map((item)=>{
          return  item.id===id  && item.qty>1 ? {...item,qty:item.qty-1}:item
        });
        setItems(newItems)
    }
    const incre=(id)=>{
        const newItems = items.map((item)=>{
          return  item.id===id  ? {...item,qty:item.qty+1}:item
        });
        setItems(newItems)
    }
  return (
    <div>
      <h1 className='bg-info text-white'>Products</h1>
 
  {items.map((item)=>{
 
      return (
        <div className=' d-inline-flex'>
      <Card className='shadow p-3 m-2 bg-body-tertiary rounded' style={{ width: '13rem' }}>
       <Card.Img variant="top" src= {require(`./project_photo/${item.image}.avif`)} />
       <Card.Body>
         <Card.Title>{item.category}</Card.Title>
         <Card.Text>
       {item.description}
         </Card.Text>
         <h5>Price: {item.price}</h5>
         <div>
             <p>Qty  <Button onClick={()=>decre(item.id)} className='m-1'>-</Button>
             {item.qty}
             <Button onClick={()=>incre(item.id)} className='m-1'>+</Button></p>
            
         </div>
         <Button variant="primary">ADD TO CART</Button>
       </Card.Body>
     </Card>
     </div>
      )
  })}

 


    </div>
  )
}

export default Products
