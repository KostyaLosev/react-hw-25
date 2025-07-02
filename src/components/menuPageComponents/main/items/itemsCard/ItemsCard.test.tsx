import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ItemsCard from './ItemsCard';
import { Meals } from '../../../../../types/Meals';

const mockItem: Meals = {
  id: '1',
  meal: 'Pizza',
  category: 'Main',
  area: 'Italian',
  instructions: 'Delicious pizza with cheese and tomato sauce.',
  img: 'pizza.jpg',
  price: 10,
};

describe('ItemsCard', () => {
  it('renders correctly', () => {
    render(
      <ItemsCard
        item={mockItem}
        quantity={2}
        onQuantityChange={() => {}}
        onAddToCart={() => {}}
      />
    );

    expect(screen.getByText(/Pizza/)).toBeInTheDocument();
    expect(screen.getByText('$10')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2')).toBeInTheDocument();
    expect(screen.getByText(/Delicious pizza with cheese and tomato sauce./i)).toBeInTheDocument();
  });

  it('calls onQuantityChange on input change', () => {
    const onQuantityChange = jest.fn();
    render(
      <ItemsCard
        item={mockItem}
        quantity={1}
        onQuantityChange={onQuantityChange}
        onAddToCart={() => {}}
      />
    );

    fireEvent.change(screen.getByRole('spinbutton'), { target: { value: '3' } });
    expect(onQuantityChange).toHaveBeenCalled();
  });

  it('calls onAddToCart on button click', () => {
    const onAddToCart = jest.fn();
    render(
      <ItemsCard
        item={mockItem}
        quantity={1}
        onQuantityChange={() => {}}
        onAddToCart={onAddToCart}
      />
    );

    fireEvent.click(screen.getByText(/add to cart/i));
    expect(onAddToCart).toHaveBeenCalled();
  });
});
