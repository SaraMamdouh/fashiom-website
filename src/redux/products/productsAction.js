import {FETCH_DATA_SUCCESS,FILTER_PRODUCTS_BY_SIZE,ORDER_PRODUCTS_BY_PRICE} from './productsType'

export const FetchProduct=()=>async (dispatch)=>{
    const res=await fetch("./data.json");
    const data= await res.json();
    dispatch(FetchData(data))
}

export const FetchData =(product)=>{
    return{
    type:FETCH_DATA_SUCCESS,
    payload:product.products
}
}
export const FilterProducts=(products,size)=>{
    return{
        type:FILTER_PRODUCTS_BY_SIZE,
        payload:{
            size:size,
            item:size===""?products:products.filter(item=>item.availableSizes.indexOf(size)>=0)
        }
    }

}

export const sortProducts=(products,sort)=>{
    const sortProduct=products.slice();
    if(sort === "latest"){
        sortProduct.sort((a,b)=>(a._id>b._id?1:-1));
    }
    else{
        sortProduct.sort((a,b)=>
        sort==="lowest"?
        a.price>b.price?
        1
        :-1
        :
         a.price>b.price?
         -1
         :1
        );

    }

    return{
        type:ORDER_PRODUCTS_BY_PRICE,
        payload:{
            sort:sort,
            products:sortProduct
        }
    }
}