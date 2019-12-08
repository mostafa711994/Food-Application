import React, {Component} from 'react';

import Aux from '../../hoc/hux';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/Ui/Modal/Modal'
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery'
import axios from '../../axios-orders';
import Spinner from '../../components/Ui/Spinner/Spinner'

const INGREDIENT_PRICES = {
    salad: 1,
    cheese: 1.5,
    meat: 2,
    bacon: 0.5

}

class BurgerBuilder extends Component {

    state = {
        ingredient: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    componentDidMount() {
        axios.get('https://my-burger-e59bc.firebaseio.com/ingredient.json')
            .then(response => {
                this.setState({ingredient: response.data});
            });
    }

    updatePurchaseState = (ingredient) => {
        const sum = Object.keys(ingredient)
            .map(igkey => {
                return ingredient[igkey];
            })
            .reduce((sum, el) => {

                return sum + el;
            }, 0);
        this.setState({purchasable: sum > 0})
    }


    addIngredientHandler = (type) => {

        const oldCount = this.state.ingredient[type];
        const newCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredient
        };
        updatedIngredient[type] = newCount;
        const oldPrice = this.state.totalPrice;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredient: updatedIngredient});
        this.updatePurchaseState(updatedIngredient);
    }
    removeIngredientHandler = (type) => {

        const oldCount = this.state.ingredient[type];
        if (oldCount <= 0) {
            return;
        }
        const newCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredient
        };
        updatedIngredient[type] = newCount;
        const oldPrice = this.state.totalPrice;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = oldPrice - priceAddition;
        this.setState({totalPrice: newPrice, ingredient: updatedIngredient});
        this.updatePurchaseState(updatedIngredient);

    }
    purchasingHandler = () => {
        this.setState({purchasing: true});
    }
    cancelPurchasingHandler = () => {
        this.setState({purchasing: false});
    }
    cancelHandler = () => {
        this.setState({purchasing: false})
    }
    continueHandler = () => {
        this.setState({loading: true});
        const orders = {
            ingredient: this.state.ingredient,
            price: this.state.totalPrice
        }
        axios.post('/orders.json', orders)
            .then(response => {
                this.setState({loading: true, purchasing: false})
            })
            .catch(error => this.setState({loading: true, purchasing: false}));
        // alert('you are continued!!');
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredient
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummery = null;

        let burger = <Spinner/>;
        if (this.state.ingredient) {
            burger = (
                <Aux>
                    <Burger ingredient={this.state.ingredient}/>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        deleted={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchase={this.state.purchasable}
                        purchased={this.purchasingHandler}
                        modalClose={this.cancelPurchasingHandler}
                        price={this.state.totalPrice}/>
                </Aux>
            );
            orderSummery = <OrderSummery ingredients={this.state.ingredient}
                                         price={this.state.totalPrice}
                                         canceled={this.cancelHandler}
                                         continued={this.continueHandler}
            />
        }
        if (this.state.loading) {
            orderSummery = <Spinner/>
        }
        return (
            <Aux>
                <Modal showed={this.state.purchasing}>
                    {orderSummery}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default BurgerBuilder;