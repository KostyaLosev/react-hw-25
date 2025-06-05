import { Meals } from "../../../../../types/Meals"

export interface ItemsCardProps {
    item: Meals;
    quantity: number | string;
    onQuantityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAddToCart: () => void;
}