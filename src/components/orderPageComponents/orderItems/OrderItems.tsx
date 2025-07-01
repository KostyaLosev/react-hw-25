import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { decreaseItemQuantity } from "../../../features/CartSlice";
import styles from './OrderItems.module.css';

const OrderItems = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
    );

    if (cartItems.length === 0) {
    return <p className={styles.empty}>Your cart is empty.</p>;
    }

    return (
    <div className={styles.wrapper}>
        {cartItems.map((item) => (
        <div key={item.id} className={styles.itemCard}>
            <img src={item.img} alt={item.meal} className={styles.itemImage} />
            <div className={styles.itemInfo}>
            <span className={styles.itemName}>{item.meal}</span>
            </div>
            <span className={styles.price}>
            ${(item.price * item.quantity).toFixed(2)} USD
            </span>
            <div className={styles.controls}>
            <input
                type="number"
                value={item.quantity}
                readOnly
                className={styles.quantity}
            />
            <button
                className={styles.removeBtn}
                onClick={() => dispatch(decreaseItemQuantity(item.id))}
            >
                X
            </button>
            </div>
        </div>
        ))}
        <div className={styles.total}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
    </div>
    );
};

export default OrderItems;
