import React, { useState, useEffect } from "react";
import styles from "./items.module.css";
import { fetchMeals } from "../../../../services/api";
import SeeMoreButton from "../seeMoreButton/SeeMoreButton";
import Categories from "../categories/Categories";
import ItemsCard from "./itemsCard/ItemsCard";

const Items = ({ incrementCart }) => {
    const [itemsData, setItemsData] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [quantities, setQuantities] = useState({});
    const itemsPerPage = 6;

    useEffect(() => {
        const getMeals = async () => {
            const meals = await fetchMeals();

            const initialQuantities = meals.reduce((acc, item) => {
                acc[item.id] = 1;
                return acc;
            }, {});

            const uniqueCategories = [...new Set(meals.map(item => item.category))];

            setItemsData(meals);
            setCategories(uniqueCategories);
            setQuantities(initialQuantities);

            if (uniqueCategories.length > 0) {
                setSelectedCategory(uniqueCategories[0]);
            }
        };

        getMeals();
    }, []);

    useEffect(() => {
        const filtered = selectedCategory
            ? itemsData.filter((item) => item.category === selectedCategory)
            : itemsData;

        setFilteredItems(filtered);
        setCurrentIndex(itemsPerPage);
    }, [selectedCategory, itemsData]);

    const loadMore = () => {
        setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
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
            <Categories
                categories={categories}
                onSelectCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
            />
            <div className={styles.itemsgrid}>
                {filteredItems.slice(0, currentIndex).map((item) => (
                    <ItemsCard
                        key={item.id}
                        item={item}
                        quantity={quantities[item.id] || ""}
                        onQuantityChange={(e) => handleInputChange(item.id, e)}
                        onAddToCart={() => handleAddToCart(item.id)}
                    />
                ))}
            </div>
            {currentIndex < filteredItems.length && (
                <SeeMoreButton onClick={loadMore} />
            )}
        </div>
    );
};

export default Items;
