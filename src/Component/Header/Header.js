import React, { useEffect, useState } from 'react';
import Cart from './cart/Cart';
import './Header.css'
import Person from './person/Person';

const Header = () => {
    const [persons,setPersons] = useState([])
    const [cart,setCart] = useState([])
    useEffect(() => {
        fetch('./Person.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setPersons(data)
        })
    },[])
    const handleCart = person => {
        const newCart = [...cart,person]
        setCart(newCart)
    }
    
    return (
        <div>
            <div className='header'>
            <h1>Some Bilionare of the world</h1>
            <h2>Total person 12</h2>
            </div>
            <div className='main-container'>
                <div className='person-container'>
                    {
                        persons.map(person => <Person
                        key={person.id}
                        person={person}
                        handleCart={handleCart}></Person>)
                    }
                </div>
                <div className='cart-container'>
                        <Cart
                        cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Header;