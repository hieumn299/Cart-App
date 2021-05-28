import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartMessage from '../components/CartMessage';
import PropTypes from 'prop-types';

class MessageContainer extends Component {
  render() {
      var {message}=this.props;
      return (
        <CartMessage message={message}></CartMessage>
      );
  }
}

MessageContainer.propTypes={
    message:PropTypes.string.isRequired,
}

const mapStatetoProps=(state)=>{
  return {
    message:state.message
  }
}

export default connect(mapStatetoProps,null)(MessageContainer);