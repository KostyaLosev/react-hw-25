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
import { Meals } from "../../../../types/Meals";

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

    const handleAddToCart = (item:Meals ) => {
    const quantity = quantities[item.id];
    if (quantity > 0) {
    dispatch(addToCart({
        id: item.id,
        meal: item.meal,
        price: item.price,
        img: item.img,
        quantity,
    }));
    }
};

    if (status === "loading")
        return (
    <div className={styles.loadingContainer}>
        <div className={styles.spinner}>
        {[...Array(12)].map((_, i) => (
            <div key={i}></div>
        ))}
        </div>
    </div>
    );
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
            onAddToCart={() => handleAddToCart(item)}
            />
        ))}
        </div>
        {currentIndex < filteredItems.length && <SeeMoreButton onClick={() => dispatch(loadMore())} />}
    </div>
    );
};

export default Items;