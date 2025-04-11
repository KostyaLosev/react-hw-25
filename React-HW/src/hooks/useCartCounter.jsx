import { useState, useEffect } from 'react';

const useCartCounter = () => {
    const [cartCount, setCartCount] = useState(() => {
        const savedCartCount = localStorage.getItem('cartCount');
        return savedCartCount ? parseInt(savedCartCount, 10) : 0;
    });

    useEffect(() => {
        localStorage.setItem('cartCount', cartCount);
    }, [cartCount]);

    const incrementCart = (amount) => {
        setCartCount((prevCount) => prevCount + amount);  
    };

    return { cartCount, incrementCart };
};

export default useCartCounter;
