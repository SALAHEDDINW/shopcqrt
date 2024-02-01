import * as actions from './action'

export const addToCart=({id,title,image,category,price})=>{
    return{
        type:actions.ADD_TO_CART,
        payload:{
            id:id,
            title:title,
            image:image,
            category:category,
            price:price
        }
    }
}

export const removeFromCart=(id)=>{
    return{
        type:actions.REMOVE_FROM_CART,
        payload:id
    }
}