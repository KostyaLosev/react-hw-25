import { useState } from "react";
import MainOrderText from "./mainOrderText/MainOrderText";
import OrderButton from "./orderButton/OrderButton";
import OrderItems from "./orderItems/OrderItems";
import OrderAddress from "./orderAddress/OrderAddress";
import styles from "./mainOrder.module.css";

const MainOrder = () => {
    const [address, setAddress] = useState({ street: "", house: "" });

return (
    <div className={styles.main}>
        <MainOrderText />
        <OrderItems />
        <OrderAddress onAddressChange={setAddress} />
        <OrderButton address={address} />
    </div>
    );
};

export default MainOrder;
