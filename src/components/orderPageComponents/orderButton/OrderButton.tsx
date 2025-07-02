import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import styles from './OrderButton.module.css';
import {Props} from "./OrderButton.d"

const OrderButton = ({ address }: Props) => {
    const cartItems = useSelector((state: RootState) => state.cart.items);

const handleOrder = async () => {
    if (cartItems.length === 0) {
        alert("Cart is empty.");
        return;
    }

    if (!address.street || !address.house) {
        alert("Please fill in your address.");
        return;
    }

    const orderData = {
        address,
        items: cartItems,
        date: new Date().toISOString(),
    };

    try {
        const res = await fetch(
        "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders",
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        }
        );

        if (!res.ok) throw new Error("Failed to place order");

        alert("Order placed successfully!");
    } catch (error) {
        console.error(error);
        alert("Something went wrong!");
    }
};

return (
    <div className={styles.container}>
        <button onClick={handleOrder}>Order</button>
    </div>
    );
};

export default OrderButton;
