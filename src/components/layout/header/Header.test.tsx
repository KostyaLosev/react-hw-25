import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../../features/CartSlice';

function renderWithStoreAndRouter(ui: React.ReactElement, { preloadedState = {}, route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route);

  const store = configureStore({
    reducer: { cart: cartReducer },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
}

describe('Header - Cart functionality', () => {
  it('displays the total number of items in the cart', () => {
    const preloadedState = {
      cart: {
        items: [
          { id: '1', meal: 'Meal 1', price: 10, img: 'img1', quantity: 2 },
          { id: '2', meal: 'Meal 2', price: 5, img: 'img2', quantity: 3 },
        ],
      },
    };
    renderWithStoreAndRouter(<Header />, { preloadedState });
    expect(screen.getByText('5')).toBeInTheDocument(); // 2 + 3 = 5
  });

  it('has a cart link that navigates to /orders', () => {
    renderWithStoreAndRouter(<Header />);
    const basketLink = screen.getByRole('link', { name: /basket/i });
    expect(basketLink).toHaveAttribute('href', '/orders');
  });
});