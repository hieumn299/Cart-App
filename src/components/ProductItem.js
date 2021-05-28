import React, { Component } from 'react';
import * as Message from '../constants/Message';

class ProductItem extends Component {
    showRatings=(ratings)=>{
        var result=[];
        for(var i=1;i<=ratings;i++){
            result.push(<i key={i} className="fa fa-star"></i>)
        }
        for(var j=1;j<=(5-ratings);j++){
            result.push(<i key={ratings+j} className="fa fa-star-o"></i>)
        }
        return result;
        
    }
    onAddToCart=(product)=>{
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }
    render() {
        var {products}=this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                    <img src={products.image} className="img-fluid" alt={products.name} />
                    <a href="/#">
                        <div className="mask waves-light waves-effect waves-light" />
                    </a>
                    </div>
                    <div className="card-body">
                    <h4 className="card-title">
                        <strong>
                        <a href="/#">{products.name}</a>
                        </strong>
                    </h4>
                    <ul className="rating">
                        <li>
                        {this.showRatings(products.rating)}
                        </li>
                      
                       
                    </ul>
                    <p className="card-text">
                        {products.description}
                    </p>
                    <div className="card-footer">
                        <span className="left">{products.price}</span>
                        <span className="right">
                        <a onClick={()=>{this.onAddToCart(products)}} className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" data-original-title="Add to Cart">
                            <i className="fa fa-shopping-cart" />
                        </a>
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;