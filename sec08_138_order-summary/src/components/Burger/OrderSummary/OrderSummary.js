import React from 'react';
import Aux from '../../../hoc/_Aux'
const OrderSummary = (props) => {
    // <li> Salad: 1</li>
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}
            </span>: {props.ingredients[igKey]}
        </li>)
    })

    return (
        <Aux>
            <div>
                <h3>Your Order</h3>
                <p>A delicious burger with the ingredients:</p>
                <ul>
                    { ingredientSummary }
                </ul>
                <p>Continue to Checkout?</p>
            </div>
        </Aux>
    );
}
 
export default OrderSummary;