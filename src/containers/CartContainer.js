import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartItem from '../components/CartItem'; 
import CartList from '../components/CartList'; 
import CartResult from '../components/CartResult';
import * as Message from '../constants/Message';    
import * as actions from '../actions/index';                                                                                                        

class CartContainer extends Component {
    showCart=(cartList)=>{
        var result=<tr>
            <td>
                {Message.MSG_CART_EMPTY}
            </td>
        </tr>;
        if(cartList.length>0){
            result=cartList.map((item,index)=>{
                return <CartItem key={index} cartitem={item} onDeletetoCart={this.props.onDeletetoCart} onChangeMessage={this.props.onChangeMessage} onUpdateProductInCart={this.props.onUpdateProductInCart}></CartItem>
            })
        }
        return result;
        
    }
    showTotalAmount=(cart)=>{
        var result=null;
        if(cart.length>0){
            result=<CartResult cart={cart}></CartResult>
        }
        return result;
    }
    render() {
        var {cart}=this.props;
        return (
            <CartList>
                {this.showCart(cart)}
                {this.showTotalAmount(cart)}
            </CartList>
        );
    }
}

CartContainer.propTypes={
    cart:PropTypes.arrayOf(
        PropTypes.shape({
            product:PropTypes.shape({
                id:PropTypes.number.isRequired,
                name:PropTypes.string.isRequired,
                image:PropTypes.string.isRequired,
                description:PropTypes.string.isRequired,
                price:PropTypes.number.isRequired,
                inventory:PropTypes.number.isRequired,
                rating:PropTypes.number.isRequired
            }).isRequired,
            quantity:PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStatetoProps=(state)=>{
  return {
    cart:state.cart,
  }
}
const mapDispatchtoProps=(dispatch,props)=>{
    return{
        onDeletetoCart:(product)=>{
            dispatch(actions.removeProductInCart(product));
        },
        onChangeMessage:(message)=>{
            dispatch(actions.changeMessage(message))
        },
        onUpdateProductInCart:(product,quantity)=>{
            dispatch(actions.updateProductInCart(product,quantity))
        }
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(CartContainer);