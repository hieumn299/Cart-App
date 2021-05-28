import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import ProductItem from '../components/ProductItem';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

class ProductContainer extends Component {
    showProduct=(products)=>{
        var result=null;
        if(products.length>0){
          result=products.map((item,index)=>{
            return <ProductItem key={index} products={item} onAddToCart={this.props.onAddToCart} onChangeMessage={this.props.onChangeMessage}></ProductItem>
          })
        }
          return result;
      }
  render() {
    var {products}=this.props;
      return (
        <ProductList>
            {this.showProduct(products)}
        </ProductList>
      );
  }
}

ProductContainer.propTypes={
    products:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            description:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            inventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage:PropTypes.func.isRequired
}

const mapStatetoProps=(state)=>{
  return {
    products:state.products
  }
}
const mapDispatchtoProps=(dispatch,props)=>{
  return{
    onAddToCart:(product)=>{
      dispatch(actions.addToCart(product,1))
    },
    onChangeMessage:(message)=>{
      dispatch(actions.changeMessage(message))
    }
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(ProductContainer);