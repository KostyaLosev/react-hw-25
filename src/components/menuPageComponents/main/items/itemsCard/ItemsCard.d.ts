import { Meals } from "../../../../../types/Meals.d"

export interface ItemsCardProps {
    item: Meal;
    quantity: number | string;
    onQuantityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAddToCart: () => void;
}