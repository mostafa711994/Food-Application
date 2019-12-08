import React from 'react';
import classes from './NaviegationItems.css';
import NaviegationItem from './NaviegationItem/NaviegationItem'
const naviegationItems = (props) =>(

    <ul className={classes.NaviegationItems}>

        <NaviegationItem link = "/" active >BurgerBuilder</NaviegationItem>
        <NaviegationItem link = "/" >Checkout</NaviegationItem>

    </ul>


);
export default naviegationItems;