import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Person.css'

const Person = (props) => {
    // console.log(props);
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const {name,proffession,img,Country,AGE,salary} = props.person
    return (
        <div className='person'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h3>proffession: {proffession}</h3>
            <h3>Country: {Country}</h3>
            <h3>Age {AGE}</h3>
            <h3>Salary; ${salary}</h3>
            <button
            onClick={()=>props.handleCart(props.person)}>
                {cartIcon}add to cart</button>
        </div>
    );
};

export default Person;