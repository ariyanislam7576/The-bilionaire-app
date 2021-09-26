import React from 'react';
import './Cart.css'
import Man from './man/Man';

const Cart = (props) => {
    const {cart} =props
     let salary = 0;
    for(const person of cart ){
        salary = salary + person.salary
    }
    return (
        <div className='cart'>
            <h3>Person added {props.cart.length}</h3>
            <h4>Salary: ${salary}</h4>
            <div className='name'>
                {
                    cart.map(person => <Man
                    key={person.name}
                    person={person}></Man>)
                }
            </div>
        </div>
    );
};

export default Cart;