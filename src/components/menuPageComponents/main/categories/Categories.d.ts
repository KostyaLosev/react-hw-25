export interface CategoriesProps {
    categories: string[];
    onSelectCategory: (category: string) => void;
    selectedCategory: string;
}