import { useState, useEffect } from "react";
import styles from './OrderAddress.module.css';

interface Props {
    onAddressChange: (address: { street: string; house: string }) => void;
}

const OrderAddress = ({ onAddressChange }: Props) => {
    const [street, setStreet] = useState("");
    const [house, setHouse] = useState("");

    useEffect(() => {
    onAddressChange({ street, house });
}, [street, house]);

return (
    <div className={styles.address}>
        <label>
        Street
        <input
            type="text"
            className={styles.input}
            value={street}
            onChange={(e) => setStreet(e.target.value)}
        />
        </label>
        <label>
        House
        <input
            type="text"
            className={styles.input}
            value={house}
            onChange={(e) => setHouse(e.target.value)}
        />
        </label>
    </div>
    );
};

export default OrderAddress;
