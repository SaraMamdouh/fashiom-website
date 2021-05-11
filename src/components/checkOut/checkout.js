import React,{ useState} from 'react';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import {connect} from 'react-redux';


const CheckOut =({cart})=>{
    const[name,setName]=useState("");
    const [order,setOrder]=useState([]);
    const [isordered,SetisOrdered]=useState(false)
    const handleinput =(e)=>{
        setName((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
   const createOrder = (e) => {
        e.preventDefault();
        setOrder(name);
        SetisOrdered(true)
      }

        return(
            isordered? <Modal isOpen={true} onRequestClose={()=>SetisOrdered(false)}>
            <Zoom>
              <button className="close-modal" onClick={()=>SetisOrdered(false)}>
                x
              </button>
              <div className="order-details">
                <h3 className="success-message">Your order has been placed.</h3>
                <h2>Order {order._id}</h2>
                <ul>
                  <li>
                    <div>Name:</div>
                    <div>{order.name}</div>
                  </li>
                  <li>
                    <div>Email:</div>
                    <div>{order.email}</div>
                  </li>
                  <li>
                    <div>Address:</div>
                    <div>{order.address}</div>
                  </li>
                  <li>
                    <div>Date:</div>
                    <div>{order.createdAt}</div>
                  </li>
                  <li>
                    <div>Total:</div>
                    <div>{"$ " + cart.reduce((a,c)=>a+(c.price*c.count),0)}</div>
                  </li>
                  <li>
                    <div>Cart Items:</div>
                    <div>
                      {cart.map((x) => (
                        <div>
                          {x.count} {" x "} {x.title}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
        :
            <Fade right cascade>
            <div className="cart">
                <form onSubmit={(e)=>createOrder(e)}>
                    <ul className="form-container">
                        <li>
                            <label>Email</label>
                            <input name="email" type="email" required onChange={(e)=>handleinput(e)}/>
                        </li>
                        <li>
                            <label>Name</label>
                            <input name="name" type="text" required onChange={(e)=>handleinput(e)}/>
                        </li>
                        <li>
                            <label>Address</label>
                            <input name="address" type="text" required onChange={(e)=>handleinput(e)}/>
                        </li>
                        <li>
                            <button type="submit" className="button primary">Check out</button>
                        </li>
                         </ul>
                </form>
            </div>
            </Fade>
            
        )
    
}
const mapStateToProps = state => {
    return {
      cart: state.cart.cart
    }
  }
  
  
  export default connect(
    mapStateToProps)(CheckOut)
