import {useState} from 'react';
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux';
import {RemoveFromCart} from '../../redux/cart/cartAction'
import CheckOut from '../checkOut/checkout';

const Cart=(props)=>{
    const [form,setForm]=useState(false)
    return(
        <div>
            {props.cart.length===0?<div className="cart cart-header">Cart is empty</div>
            :<div className="cart cart-header"> you have {props.cart.length} in the cart </div>}
            <div>
                <div className="cart">
                <Fade left cascade>
                    <ul className="cart-items">
                        {props.cart.map(item=>(
                            <li key={item._id}>
                                <div>
                                    <img src={item.image} alt={item.title}/>
                                </div>
                                <div>
                                    <div>
                                    {item.title}
                                </div>
                                <div className="right">
                                   {"$ "+ item.price + "x" + item.count +" "} 
                                <button className="button" onClick={()=>props.removeItem(item)}>Remove</button>
                                </div>
                                </div>
                            </li>
                        )
                            )}
                    </ul>
                    </Fade>
</div>
{props.cart.length!==0 &&(
<div className="checkout">
<div className="total">
    <div>
    Total : { "$ " + props.cart.reduce((a,c)=>a+(c.price*c.count),0)}
    </div>
    <button className="button primary" onClick={()=>{setForm(true)}} >Proceed</button>
</div>
{form &&<CheckOut/>    }
</div>
)}
</div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
      cart: state.cart.cart
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        removeItem:(item)=>dispatch(RemoveFromCart(item))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
 