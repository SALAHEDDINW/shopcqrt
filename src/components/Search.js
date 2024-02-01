import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Search() {
    const[product,setProduct]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=> setProduct(res.data))
        return ()=>{
            return false
        }
    },[])

    const[inputVale,setInputVale]=useState('')
    const[filtredProducts,setFiltredProducts]=useState([])
    const[isSearch,setIsSearch]=useState(false)


    const handleSearch=(e)=>{
        if(e.target.value!==''){
            setInputVale(e.target.value)
            const filter=product.filter((items)=>{
                return items.title.toLowerCase().includes(inputVale)
            })
            setFiltredProducts(filter)
            setIsSearch(true)
        }else{
            setIsSearch(false)
        }
    }

    // console.log(filtredProducts)
  return (
    <div className='container-fluid'>
      <Header/>
      <div className='col-12 col-md-4 col-lg-3 mt-3'>
        <input onChange={handleSearch} className='form-control' placeholder='search products ...'/>
      </div>
      <div className='row mt-3 d-flex justify-content-start'>
        {isSearch===true?(
            filtredProducts.map((product,index)=>{
                return <div className='col-12 col-md-2 col-lg-2 border' key={index}>
                            <div className="card card-width-search mt-3">
                              <img src={product.image} className="card-img-top img-card-search" alt="..."/>
                              <div className="card-body">
                                <h5 className="card-title">{product.title.substring(0,10)} ...</h5>
                                <p className="card-text">{product.description.substring(0,35)} ...</p>
                                <Link to={`/PrductDetails/${product.id}`} className="btn btn-primary btn-sm">Show more</Link>
                              </div>
                            </div> 
                       </div>
                })
        ):(
            <p>search somthign!</p>
        )}
      </div>
    </div>
  )
}

export default Search
