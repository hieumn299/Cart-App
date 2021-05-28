import React, { Component } from 'react';
import * as Message from '../constants/Message';

class CartItem extends Component {
    calculatorSumMoney=(quantity,price)=>{
        return quantity*price;
    }
    onDeleteToCart=(product)=>{
        this.props.onDeletetoCart(product);
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    onUpdateQuantity=(product,quantitychanged)=>{
        if(quantitychanged>0){
            this.props.onUpdateProductInCart(product,quantitychanged);
            this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
        }
    }
    render() {
        var {cartitem}=this.props;
        var {quantity}=cartitem;
        console.log(quantity);
        return (
            <tr>
                <th scope="row">
                    <img src={cartitem.product.image} alt={cartitem.product.name} />
                </th>
                <td>
                    <h5>
                    <strong>{cartitem.product.name}</strong>
                    </h5>
                </td>
                <td>{cartitem.product.price}</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                    <label onClick={()=>{this.onUpdateQuantity(cartitem.product,cartitem.quantity -1)}} className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                        <a >—</a>
                    </label>
                    <label onClick={()=>{this.onUpdateQuantity(cartitem.product,cartitem.quantity +1)}} className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                        <a >+</a>
                    </label>
                    </div>
                </td>
                <td>{this.calculatorSumMoney(cartitem.quantity,cartitem.product.price)}</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" data-original-title="Remove item" onClick={()=>{this.onDeleteToCart(cartitem.product)}}>
                    X
                    </button>
                </td>
            </tr>
        );
    }
    
}

export default CartItem;