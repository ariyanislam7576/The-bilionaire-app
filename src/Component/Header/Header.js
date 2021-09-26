import React, { useEffect, useState } from 'react';
import Cart from './cart/Cart';
import Man from './cart/man/Man';
import './Header.css'
import Person from './person/Person';
/*-------------------------------
        this is header component
-----------------------------------------*/
const Header = () => {
    /*----------using hook------------*/
    const [persons,setPersons] = useState([])
    const [cart,setCart] = useState([])
    useEffect(() => {
        fetch('./Person.json')
        .then(res => res.json())
        .then(data => {
            setPersons(data)
        })
    },[])
    /*handle button*/
    const handleCart = person => {
        const newCart = [...cart,person]
        setCart(newCart)
    }
    
    return (
        <div>
            <div className='header'>
            <h1>Some Bilionaire of the world</h1>
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