export interface CartState {
    items: CartItem[];
}

export interface CartItem {
    id: string;
    meal: string;
    price: number;
    img: string;
    quantity: number;
}