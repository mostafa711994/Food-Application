import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo'
import NaviegationItems from '../NaviegationItems/NaviegationItems';

const SideDrawer = () =>{
return (
    <div className={classes.SideDrawer}>
        <Logo height = "11%"/>
        <nav>
            <NaviegationItems/>
        </nav>
    </div>
);


}

export default SideDrawer;
