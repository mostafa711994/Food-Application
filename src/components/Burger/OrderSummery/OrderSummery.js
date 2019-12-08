import React from 'react';
import Aux from '../../../hoc/hux';
import Button from '../../Ui/Button/Button'
const orderSummery = (props)=> {

    const ingredientSummery  = Object.keys(props.ingredients).map(igkey =>{
            return(
                <li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}</span>:{props.ingredients[igkey]}</li>
            );
        });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>your Burger</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p><strong>Current Price: {props.price.toFixed(2)}</strong></p>

            <p>Continue To Checkout?</p>
            <Button btnType = "Danger"  clicked={props.canceled}>CANCEL</Button>
            <Button btnType = "Success"  clicked={props.continued}>CONTINUE</Button>
        </Aux>
    );

}

export default orderSummery;