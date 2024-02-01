import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/panier/actionCreator'



function SingleProduct() {

  const dispatching=useDispatch()
  const[product,setProduct]=useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=> setProduct(res.data))
        return ()=>{
            return false
        }
    },[])

  const {id}=useParams()
  const filter=product.filter((item)=>{
    return item.id===Number(id)
  })

  
  return (
    <div className='container-fluid'>
      <Header/>
      <div className='mt-3'>
        {filter.map((prod,index)=>{
          return <div className='d-flex' key={index}>
                    <div>
                      <img src={prod.image} className='productDetails me-2 p-2 border rounded'/>
                    </div>
                    <div>
                      <h3>{prod.title}</h3>
                      <p className='text text-primary fw-bold'>Description: <span className='text text-dark fw-normal'>{prod.description}</span></p>
                      <p className='text text-primary fw-bold'>Category: <span className='text text-dark fw-normal'>{prod.category}</span></p>
                      <p className='text text-primary fw-bold'>Price: <span className='text text-dark fw-normal'>{prod.price}</span></p>
                      <p className='text text-primary fw-bold'>Rate: <span className='text text-dark fw-normal'>{prod.rating.rate}</span></p>
                      <p className='text text-primary fw-bold'>Rates number: <span className='text text-dark fw-normal'>{prod.rating.count}</span></p>
                      <div>
                        <p onClick={()=>dispatching(addToCart({id:prod.id,title:prod.title,image:prod.image,category:prod.category,price:prod.price}))} className='btn btn-primary btn-sm'>Add to cart</p>
                      </div>
                    </div>
                 </div>
        })}
      </div>
    </div>
  )
}

export default SingleProduct
