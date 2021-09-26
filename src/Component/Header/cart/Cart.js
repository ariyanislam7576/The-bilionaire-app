import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cart);
    const {cart} =props
    let name = ''
    let salary = 0;
    for(const person of cart ){
        salary = salary + person.salary
        name = name + person.name
    }
    return (
        <div className='cart'>
            <h3>Person added {props.cart.length}</h3>
            <h4>Salary: ${salary}</h4>
            <h4>name:{name} </h4>
        </div>
    );
};

export default Cart;