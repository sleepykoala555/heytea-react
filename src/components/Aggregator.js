import React from 'react';
import './Aggregator.css';
import Card from 'react-bootstrap/Card';

// TODO: create a component that displays a single bakery item

export default function Aggregator(props) {

  const cartList = props.cartList;
  const totalPrice = props.totalPrice;
  const clearCart = props.clearCart;

  return (
    <div className="Menu">
        <Card style={{ width: '15rem' }} className="card">
          <Card.Body>
            <h3>Cart</h3>
            <Card.Text>
            <button className="button" onClick={() => clearCart()}>Clear Cart</button>
            {cartList.map(e => <p> {e.name}  ${e.price} </p>)} 
            </Card.Text>
          </Card.Body>
          <h4> Total price = ${totalPrice.toFixed(2)} </h4>
        </Card>
    </div>
  );

}
