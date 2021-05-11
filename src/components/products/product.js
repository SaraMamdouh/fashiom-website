import React,{useEffect, useState} from 'react';
import Fade from 'react-reveal/Fade'
import {connect} from 'react-redux';
import {FetchProduct} from '../../redux/products/productsAction';
import { addToCart } from '../../redux/cart/cartAction';
import ProductDetail from './product-details';

const Products =({fetchProduct,products,AddToCart})=>{ 
  const [detail,ShowDetails]=useState({})
  const [hide,show]=useState(false)

    useEffect(()=>{
        fetchProduct();
    },[])
 const closeModal=()=>{
   show(false)
 }
 const openModal=(product)=>{
   show(true)
   ShowDetails(product)
 }
 
 return(
<React.Fragment>
{hide &&<ProductDetail product={detail} closeModal={closeModal} addToCart={()=>{AddToCart(detail,products);closeModal()}}/>}
<Fade bottom cascade>
        <ul className="products">
{
        products.map((product) => (
          <li key={product._id}>
            <div className="product">
              <a href={"#"+product._id}
               onClick={()=>openModal(product)}>
                <img src={product.image} alt={product.title}></img>
                <p>{product.title}</p>
              </a>
              <div className="product-price">
                <div>{"$"+(product.price)}</div>
                <button
                  onClick={() =>AddToCart(product,products)}
                  className="button primary"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </li>
        )
        )
        }
      </ul>
       </Fade>
</React.Fragment>



  )
}
const mapStateToProps = state => {
    return {
      products: state.product.filteredProducts
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchProduct: () => dispatch(FetchProduct()),
      AddToCart:(item,products)=>dispatch(addToCart(item,products))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Products)
 