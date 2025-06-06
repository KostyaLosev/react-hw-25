import React, { useEffect } from "react";
import styles from "./items.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealsThunk, loadMore, selectCategory, updateQuantity,} from "../../../../features/ItemsSlice";
import { RootState, AppDispatch } from "../../../../store";
import SeeMoreButton from "../seeMoreButton/SeeMoreButton";
import Categories from "../categories/Categories";
import ItemsCard from "./itemsCard/ItemsCard";
import useFetch from "../../../../hooks/useFetch";
import { addToCart } from "../../../../features/CartSlice"

const Items = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { fetchWithLogging } = useFetch();

    const {
    filteredItems,
    currentIndex,
    selectedCategory,
    categories,
    quantities,
    status,
    } = useSelector((state: RootState) => state.items);

    useEffect(() => {
    dispatch(fetchMealsThunk({ fetchWithLogging }));
    }, [dispatch, fetchWithLogging]);

    const handleInputChange = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10) || 0;
    dispatch(updateQuantity({ id, quantity: value }));
};

    const handleAddToCart = (id: string) => {
    const quantityToAdd = quantities[id];
    if (quantityToAdd > 0) {
        dispatch(addToCart(quantityToAdd));  
    }
    };

    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>Failed to load items.</p>;

return (
    <div>
        <Categories
        categories={categories}
        onSelectCategory={(cat) => dispatch(selectCategory(cat))}
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
        {currentIndex < filteredItems.length && <SeeMoreButton onClick={() => dispatch(loadMore())} />}
    </div>
    );
};

export default Items;