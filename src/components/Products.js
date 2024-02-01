import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Products() {
    const[product,setProduct]=useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=> setProduct(res.data))
        return ()=>{
            return false
        }
    },[])

    useEffect(()=>{
        console.log(product)
    },[])
  return (
        product.map((product,index)=>{
        return <div className='col-12 col-md-3 col-lg-4' key={index}>
                    <div className="card card-width mt-3">
                      <img src={product.image} className="card-img-top img-card" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{product.title.substring(0,10)} ...</h5>
                        <p className="card-text">{product.description.substring(0,35)} ...</p>
                        <Link to={`/PrductDetails/${product.id}`} className="btn btn-primary btn-sm">Show more</Link>
                      </div>
                    </div> 
               </div>
        })
  )
}

export default Products
