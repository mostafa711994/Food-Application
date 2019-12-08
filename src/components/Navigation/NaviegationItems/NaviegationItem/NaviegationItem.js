import React from 'react';
import classes from './NaviegationItem.css';
const naviegationItem = (props) =>(

    <li className={classes.NaviegationItem}>
        <a href={props.link}
        className={props.active ? classes.active : null}>
            {props.children}
        </a>

    </li>

);
export default naviegationItem;