import {FETCH_DATA_SUCCESS,FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE} from './productsType'

const initialState={
    product:[],
    size:"",
    sort:"",
    filteredProducts:[]
}

export const productReducer=(state=initialState,action)=>{
switch (action.type){
    case FETCH_DATA_SUCCESS:
        return{
            ...state,
            product:action.payload,
            filteredProducts:action.payload
        }
    case FILTER_PRODUCTS_BY_SIZE:
        return{
                ...state,
                filteredProducts:action.payload.item,
                size:action.payload.size
        }
        case ORDER_PRODUCTS_BY_PRICE:
            return{
                    ...state,
                    filteredProducts:action.payload.products,
                    sort:action.payload.sort
            }
        default:
            return state;
}
}