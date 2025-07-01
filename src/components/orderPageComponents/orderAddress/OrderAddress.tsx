import styles from './OrderAddress.module.css';

const OrderAddress = () => {
    return (
    <div className={styles.address}>
        <label>
        Street
        <input type="text" className={styles.input} />
        </label>
        <label>
        House
        <input type="text" className={styles.input} />
        </label>
    </div>
    );
};

export default OrderAddress;