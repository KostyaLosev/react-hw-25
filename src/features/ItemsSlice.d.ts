import { Meals } from "../types/Meals"

export interface ItemsState {
    itemsData: Meals[];
    filteredItems: Meals[];
    categories: string[];
    selectedCategory: string;
    currentIndex: number;
    quantities: Record<string, number>;
    status: "idle" | "loading" | "failed";
}