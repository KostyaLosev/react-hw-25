import React, { Component } from "react";
import styles from "./items.module.css";
import { fetchMeals } from "../../../services/api";
import SeeMoreButton from "../seeMoreButton/SeeMoreButton";

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsData: [],
            visibleItems: [],
            currentIndex: 0,
            itemsPerPage: 6,
            quantities: {} 
        };
    }

    async componentDidMount() {
        const meals = await fetchMeals();
        console.log("Data:", meals);

        this.setState((prevState) => {
            const initialQuantities = {};
            meals.forEach((item) => {
                initialQuantities[item.id] = 1; 
            });

            return {
                itemsData: meals,
                visibleItems: meals.slice(0, prevState.itemsPerPage),
                currentIndex: prevState.itemsPerPage,
                quantities: initialQuantities,
            };
        });
    }

    loadMore = () => {
        this.setState((prevState) => {
            const newIndex = prevState.currentIndex + prevState.itemsPerPage;
            return {
                visibleItems: [
                    ...prevState.visibleItems,
                    ...prevState.itemsData.slice(prevState.currentIndex, newIndex),
                ],
                currentIndex: newIndex,
            };
        });
    };

    handleInputChange = (id, event) => {
        const value = parseInt(event.target.value, 10) || 0; 
        this.setState((prevState) => ({
            quantities: {
                ...prevState.quantities,
                [id]: value,
            },
        }));
    };

    handleAddToCart = (id) => {
        const quantityToAdd = this.state.quantities[id]; 

        if (quantityToAdd > 0) {
            this.props.incrementCart(quantityToAdd); 
        }
    };

    renderItems() {
        return this.state.visibleItems.map((item) => (
            <div key={item.id} className={styles.itemscard}>
                <img src={item.img} alt={item.meal} />
                <div className={styles.itemscardContent}>
                    <div className={styles.itemscardHeader}>
                        <h3>{item.meal}</h3>
                        <p>${item.price} USD</p>
                    </div>
                    <p className={styles.description}>
                        {item.instructions.substring(0, 80)}...
                    </p>
                    <div className={styles.buttonWrapper}>
                        <input
                            type="number"
                            value={this.state.quantities[item.id] || ""}
                            className={styles.counterInput}
                            min="0"
                            onChange={(e) => this.handleInputChange(item.id, e)}
                        />
                        <button onClick={() => this.handleAddToCart(item.id)}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        ));
    }

    render() {
        return (
            <div>
                <div className={styles.itemsgrid}>{this.renderItems()}</div>
                {this.state.currentIndex < this.state.itemsData.length && (
                    <SeeMoreButton onClick={this.loadMore} />
                )}
            </div>
        );
    }
}

export default Items;
