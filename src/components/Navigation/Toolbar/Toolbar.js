import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo';
import NaviegationItems from '../NaviegationItems/NaviegationItems';
import SideToggle from '../SideDrawer/SideToggle/SideToggle'
const toolbar = (props) =>(

    <header className={classes.Toolbar}>
        <SideToggle clicked = {props.ToggleClicked}/>
        <Logo  height = "80%" />
        <nav>

            <NaviegationItems/>

        </nav>


    </header>

);
export default toolbar;