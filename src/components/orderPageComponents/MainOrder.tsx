import MainOrderText from "./mainOrderText/MainOrderText";
import OrderButton from "./orderButton/OrderButton";
import OrderItems from "./orderItems/OrderItems";
import OrderAddress from "./orderAddress/OrderAddress"
import styles from "./mainOrder.module.css"

const MainOrder = () => {
    return (
        <div className={styles.main}>
        <MainOrderText/>
        <OrderItems/>
        <OrderAddress/>
        <OrderButton/>
        </div>
    )
}

export default MainOrder;