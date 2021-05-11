import React, { Component } from 'react';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';

class ProductDetail  extends Component{
  
    render(){
return(
    <Modal isOpen={true} onRequestClose={this.props.closeModal}>
        <Zoom>
        <button className="close-modal" onClick={this.props.closeModal}>X</button>
        <div className="product-details">
            <img src={this.props.product.image} alt={this.props.product.title}/>
            <div className="product-details-description">
                <p>
                    <strong>{this.props.product.title}</strong>
                </p>
                <p>
                    {this.props.product.description}
                </p>
                <p>
                    Available Sizes: {this.props.product.availableSizes.map((x)=>
                    (
                        <button className="button">{x}</button>
                    ))}
                </p>
                <div className="product-price">
                    <div>{"$ "+ this.props.product.price}</div>
                    <button className="button primary" onClick={this.props.addToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        </Zoom>
    </Modal>
)
}
}
export default ProductDetail;