import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import OrderItems from './OrderItems';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../../features/CartSlice';

const renderWithStore = (preloadedState = {}) => {
  const store = configureStore({
    reducer: { cart: cartReducer },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <OrderItems />
    </Provider>
  );
};

describe('OrderItems', () => {
  it('displays a message if the cart is empty', () => {
    renderWithStore({ cart: { items: [] } });
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it('displays items and total amount', () => {
    const preloadedState = {
      cart: {
        items: [
          { id: '1', meal: 'Pizza', price: 10, img: 'img1', quantity: 2 },
          { id: '2', meal: 'Burger', price: 5, img: 'img2', quantity: 1 },
        ],
      },
    };

    renderWithStore(preloadedState);

    expect(screen.getByText(/Pizza/)).toBeInTheDocument();
    expect(screen.getByText(/Burger/)).toBeInTheDocument();
    expect(screen.getByText(/Total: \$25.00/)).toBeInTheDocument();
  });

  it('decreases quantity when clicking the X button', () => {
    const preloadedState = {
      cart: {
        items: [{ id: '1', meal: 'Sushi', price: 12, img: 'img3', quantity: 2 }],
      },
    };

    renderWithStore(preloadedState);

    const removeBtn = screen.getByRole('button', { name: /x/i });
    expect(removeBtn).toBeInTheDocument();

    fireEvent.click(removeBtn);
  });
});
