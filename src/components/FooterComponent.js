
import React from 'react';

const ItemsListComponent = (props) => {
    const { cartItems } = props;
    return (
        <div>
            <div className="footer">
                <div className=" button2-container">
                    <button type="button" className="button2-cart" onClick={() => {
                        // console.log(cartItems)
                        const cartDetails = Object.values(cartItems)
                        let totalCost = 0;
                        cartDetails.forEach((itemDetails, index) => {
                            totalCost = totalCost + itemDetails.quant * itemDetails.price
                        })
                     
                        // console.log({ totalCost })
                        window.alert(`Total Cost: ${totalCost}`)
                    }}>CHECKOUT</button> </div>
                {/* <p>Footer</p> */}
               
            </div>
        </div>

    );



}

export default ItemsListComponent;