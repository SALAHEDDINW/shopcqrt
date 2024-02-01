import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/panier/actionCreator";


function Panier(){
    const panier=useSelector((state)=>state.products)
    const dispatching=useDispatch()
    return(
        <div>
            <Header/>
            <div className="container mt-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Title</th>
                  <th scope="col">Image</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">action</th>
                </tr>
              </thead>
              <tbody>
                 {panier.map((item,index)=>{
                    return <tr key={index}>
                             <th scope="row">{item.id}</th>
                             <td><img src={item.image} className="img-panier" alt="..."/></td>
                             <td>{item.title}</td>
                             <td>{item.category}</td>
                             <td>{item.price}</td>
                             <td><p onClick={()=>dispatching(removeFromCart(item.id))} className="btn btn-outline-danger btn-sm">Delete</p></td>
                           </tr>
                 })}
              </tbody>
            </table>
            </div> 
        </div>
    )
}
export default Panier


















// export default ()=>{
//     return(
//         <div>Panier</div>
//     )
// }