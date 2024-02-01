import * as actions from "./action"


const initialeState={
    products:[]
}

export const panierReducer=(state=initialeState,action)=>{
    if(action.type===actions.ADD_TO_CART){
        const itemExists=state.products.find((item)=>item.id===action.payload.id)
        if(itemExists){
            return state
        }else{
            return{
                ...state.products,
                products:[...state.products,action.payload]
            }
        }

    }else if(action.type===actions.REMOVE_FROM_CART){
        return{
            ...state.products,
            products:[...state.products.filter((item)=>{
                return item.id!==action.payload
            })]
        }
    }else{
        return state
    }
}