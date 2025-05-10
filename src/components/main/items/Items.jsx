import React, { Component } from "react";
import styles from "./items.module.css";
import { fetchMeals } from "../../../services/api";
import SeeMoreButton from "../seeMoreButton/SeeMoreButton";
import ItemsCard from "./itemsCard/ItemsCard"

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsData: [],
            visibleCount: 6,
        };
    }

    async componentDidMount() {
        const meals = await fetchMeals();

        const categories = [...new Set(meals.map(item => item.category))];

        this.setState({ itemsData: meals });

        if (this.props.onCategoriesExtracted) {
            this.props.onCategoriesExtracted(categories);
        }
    }

    loadMore = () => {
        this.setState((prevState) => ({
            visibleCount: prevState.visibleCount + 6,
        }));
    };

    handleAddToCart = (quantity) => {
        if (quantity > 0) {
            this.props.incrementCart(quantity);
        }
    };

    renderItems() {
        const { itemsData, visibleCount } = this.state;
        return itemsData.slice(0, visibleCount).map((item) => (
            <ItemsCard key={item.id} item={item} onAddToCart={this.handleAddToCart} />
        ));
    }

    render() {
        const { itemsData, visibleCount } = this.state;

        return (
            <div>
                <div className={styles.itemsgrid}>{this.renderItems()}</div>
                {visibleCount < itemsData.length && (
                    <SeeMoreButton onClick={this.loadMore} />
                )}
            </div>
        );
    }
}

export default Items;
