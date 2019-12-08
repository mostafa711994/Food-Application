import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let countIngredients = Object.keys(props.ingredient)
        .map(igkey => {
            return [...Array(props.ingredient[igkey])].map((_, i) => {
                return <BurgerIngredient key={igkey + i} type={igkey}/>;
            });
        })

    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
if(countIngredients.length === 0){
    countIngredients = <p>Please add some ingredients</p>
}
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {countIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );

};

export default burger;
