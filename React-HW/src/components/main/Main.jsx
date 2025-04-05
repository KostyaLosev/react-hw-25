import React, {Component} from "react";
import styles from "./main.module.css"
import MainText from "./mainText/MainText";
import Categories from "./categories/Categories";
import Items from "./items/Items";


class Main extends Component {
    render() {
    return (
        <div className={styles.main}>
            <MainText/>
            <Categories/>
            <Items incrementCart={this.props.incrementCart}/>
        </div>
    )
}
}

export default Main;