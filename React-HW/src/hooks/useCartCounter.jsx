import React, { useState } from "react";

const CartCounter = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    const incrementCart = (amount) => {
        setCartCount(prevCount => prevCount + amount);
    };

    return children(cartCount, incrementCart);
};

export default CartCounter;