import {ADD_TO_CART, REMOVE_FROM_CART} from './cartType'

const initialState={
    cart:[]
}

export const cartReducer=(state=initialState,action)=>{
switch (action.type){
        case ADD_TO_CART:
            var alreadyinCart=false
            var cart=state.cart.slice();
        cart.forEach(item=>{
               if(item._id===action.payload.item._id){
                alreadyinCart=true;
                item.count++
               }
            });
            if(!alreadyinCart){
               cart.push({...action.payload.item,count:1})
            }
           return {
               cart:cart
           };
           case REMOVE_FROM_CART:
               return{
                   cart:state.cart.filter(item=>item._id!==action.payload._id)
               }
       
        default:
            return state;
}
}