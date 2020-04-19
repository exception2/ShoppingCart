
import React from 'react';

const getCost = ({ cartItems }) => {
    const cartDetails = Object.values(cartItems)
    let totalCost = 0;
    cartDetails.forEach((itemDetails, index) => {
        totalCost = totalCost + itemDetails.quant * itemDetails.price
    })
    return totalCost
}

const getTotalItems = ({ cartItems }) => {
    const cartDetails = Object.values(cartItems)
    let totalItems = 0;
    cartDetails.forEach((itemDetails, index) => {
        totalItems = totalItems + itemDetails.quant;
    })
    return totalItems
}
const FooterComponent = (props) => {
    const { cartItems } = props;
    return (
        <div>
            <div className="footer">
                <div className="footer-items">
                    <span > Qty  {getCost({ cartItems })}  </span>
                    <span > Total {getTotalItems({ cartItems })}</span>
                </div>
                <div className=" button2-container">
                    <button type="button" className="button2-cart" onClick={() => {
                        const totalCost = getCost({ cartItems })
                        // console.log({ totalCost })
                        window.alert(`Total Cost: ${totalCost}`)
                    }}>CHECKOUT</button> </div>
            </div>
        </div>

    );



}

export default FooterComponent;