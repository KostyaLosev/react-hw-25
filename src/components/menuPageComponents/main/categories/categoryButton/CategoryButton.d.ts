export interface CategoryButtonProps {
    category: string;
    isSelected: boolean;
    onClick: (category: string) => void;
}