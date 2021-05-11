import {ADD_TO_CART,REMOVE_FROM_CART} from './cartType';

export const addToCart=(item,product)=>{
    return{
    type:ADD_TO_CART,
    payload:{
        item:item,
        product:product
}
    }
}

export const RemoveFromCart=(item)=>{
    return{
    type:REMOVE_FROM_CART,
    payload:item
    }
}