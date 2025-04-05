import React, { useState, useEffect } from "react";
import styles from "./items.module.css";
import { fetchMeals } from "../../../services/api";
import SeeMoreButton from "../seeMoreButton/SeeMoreButton";
import Categories from "../categories/Categories"; 

const Items = ({ incrementCart }) => {
    const [itemsData, setItemsData] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [visibleItems, setVisibleItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("Dessert"); 
    const itemsPerPage = 6;
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        const getMeals = async () => {
            const meals = await fetchMeals();
            console.log("Data:", meals);

            const initialQuantities = meals.reduce((acc, item) => {
                acc[item.id] = 1;
                return acc;
            }, {});

            setItemsData(meals);
            setFilteredItems(meals);
            setVisibleItems(meals.slice(0, itemsPerPage));
            setCurrentIndex(itemsPerPage);
            setQuantities(initialQuantities);
        };

        getMeals();
    }, []);

    useEffect(() => {
        const filtered = selectedCategory
            ? itemsData.filter((item) => item.category === selectedCategory)
            : itemsData;

        setFilteredItems(filtered);
        setVisibleItems(filtered.slice(0, itemsPerPage));
        setCurrentIndex(itemsPerPage);
    }, [selectedCategory, itemsData]);

    const loadMore = () => {
        const newIndex = currentIndex + itemsPerPage;
        setVisibleItems([...visibleItems, ...filteredItems.slice(currentIndex, newIndex)]);
        setCurrentIndex(newIndex);
    };

    const handleInputChange = (id, event) => {
        const value = parseInt(event.target.value, 10) || 0;
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: value,
        }));
    };

    const handleAddToCart = (id) => {
        const quantityToAdd = quantities[id];
        if (quantityToAdd > 0) {
            incrementCart(quantityToAdd);
        }
    };

    return (
        <div>
            <Categories onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} /> 
            <div className={styles.itemsgrid}>
                {visibleItems.map((item) => (
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
                                    value={quantities[item.id] || ""}
                                    className={styles.counterInput}
                                    min="0"
                                    onChange={(e) => handleInputChange(item.id, e)}
                                />
                                <button onClick={() => handleAddToCart(item.id)}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {currentIndex < filteredItems.length && <SeeMoreButton onClick={loadMore} />}
        </div>
    );
};

export default Items;
