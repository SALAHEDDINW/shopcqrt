import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const panier=useSelector((state)=>state.products)
  const total=panier.length

  // console.log(total)
  return (
    <div className='d-flex justify-content-center bg-warning pt-3 pb-3'>
      <Link className='text-decoration-none border p-1 rounded bg-white me-2 text text-dark fw-bold pe-2' to='/'>Home</Link>
      <Link className='text-decoration-none border p-1 rounded bg-white me-2 text text-dark fw-bold pe-2' to='/Search'>Search</Link>
      <Link className='text-decoration-none border p-1 rounded bg-white text text-dark fw-bold' to='/Panier'>Panier <span>{total}</span></Link>
    </div>
  )
}

export default Header
