import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'


const controls = [
    {label:'Salad', type: 'salad'},
    {label:'Meat', type: 'meat'},
    {label:'Cheese', type: 'cheese'},
    {label:'Bacon', type: 'bacon'},
];

const buildControls = (props) => (

    <div className={classes.BuildControls}>
        <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>

        {controls.map(con =>(
            <BuildControl key = {con.label}
                          label = {con.label}
            added = {()=> props.ingredientAdded(con.type)}
            removed = {()=> props.deleted(con.type)}
            disabled = {props.disabled[con.type]}/>
        ))}
        <button className={classes.OrderButton} disabled={!props.purchase} onClick={props.purchased}>ORDER NOW</button>

    </div>
);


export default buildControls;
