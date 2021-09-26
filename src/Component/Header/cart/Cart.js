import React from 'react';
import './Cart.css'
import Man from './man/Man';
 /*---------------------------------
        cart component
--------------------------------*/
const Cart = (props) => {
    // console.log(props.cart);
    const {cart} =props
     let salary = 0;
     let name = ''
    for(const person of cart ){
        salary = salary + person.salary
        name = name + person.name + ',  '
    }
    
    return (
        <div className='cart'>
            <h3>Person added {props.cart.length}</h3>
            <h4>Salary: ${salary}</h4>
            <h4>Name: {name}  <br /></h4>
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