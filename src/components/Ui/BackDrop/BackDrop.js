import React from 'react';
import classes from './BackDrop.css'
const backdrop = (props) =>(

    props.showed ? <div className={classes.backdrop} onClick={props.clicked}></div> : null

);

export default backdrop;