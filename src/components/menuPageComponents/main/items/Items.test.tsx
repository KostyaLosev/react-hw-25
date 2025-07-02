import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Items from './Items';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../../../features/CartSlice';
import itemsReducer from '../../../../features/ItemsSlice';
import  { ItemsState } from '../../../../features/ItemsSlice.d';
import * as fetchHook from '../../../../hooks/useFetch';
import { Meals } from '../../../../types/Meals';

const mockItem: Meals = {
  id: '1',
  meal: 'Pizza',
  category: 'Main',
  area: 'Italian',
  instructions: 'Some instructions',
  img: 'pizza.jpg',
  price: 12,
};

describe('Items - Cart functionality', () => {
  beforeEach(() => {
    jest.spyOn(fetchHook, 'default').mockReturnValue({
      fetchWithLogging: jest.fn().mockResolvedValue(
        new Response(
          JSON.stringify([
            {
              id: '1',
              meal: 'Pizza',
              category: 'Main',
              area: 'Italian',
              instructions: 'Some instructions',
              img: 'pizza.jpg',
              price: 12,
            },
          ])
        )
      ),
      logs: [],
      loading: false,
      error: null,
      clearLogs: jest.fn(),
    });
  });

  const renderWithStore = (
    preloadedItemsState: ItemsState,
    preloadedCartState = { items: [] as any[] }
  ) => {
    const store = configureStore({
      reducer: {
        cart: cartReducer,
        items: itemsReducer,
      },
      preloadedState: {
        items: preloadedItemsState,
        cart: preloadedCartState,
      },
    });

    return {
      store,
      ...render(
        <Provider store={store}>
          <Items />
        </Provider>
      ),
    };
  };

  it('adds item to cart if quantity is greater than 0', async () => {
    const preloadedItemsState: ItemsState = {
      filteredItems: [mockItem],
      itemsData: [mockItem],
      categories: ['All', 'Main'],
      selectedCategory: 'All',
      currentIndex: 1,
      quantities: { [mockItem.id]: 1 }, 
      status: 'idle',
    };

    const { store } = renderWithStore(preloadedItemsState);

    const input = await screen.findByRole('spinbutton');
    await act(async () => {
      fireEvent.change(input, { target: { value: '2' } });
    });

    const addToCartButton = await screen.findByText(/add to cart/i);
    await act(async () => {
      fireEvent.click(addToCartButton);
    });

    const state = store.getState();
    expect(state.cart.items).toHaveLength(1);
    expect(state.cart.items[0]).toMatchObject({
      id: '1',
      meal: 'Pizza',
      price: 12,
      img: 'pizza.jpg',
      quantity: 2,
    });
  });

  it('does not add item to cart if quantity is 0', async () => {
    const preloadedItemsState: ItemsState = {
      filteredItems: [mockItem],
      itemsData: [mockItem],
      categories: ['All', 'Main'],
      selectedCategory: 'All',
      currentIndex: 1,
      quantities: { [mockItem.id]: 1 },
      status: 'idle',
    };

    const { store } = renderWithStore(preloadedItemsState);

    const input = await screen.findByRole('spinbutton');
    await act(async () => {
      fireEvent.change(input, { target: { value: '0' } });
    });

    const addToCartButton = await screen.findByText(/add to cart/i);
    await act(async () => {
      fireEvent.click(addToCartButton);
    });

    const state = store.getState();
    expect(state.cart.items).toHaveLength(0);
  });

  it('displays updated quantity in input field', async () => {
    const preloadedItemsState: ItemsState = {
      filteredItems: [mockItem],
      itemsData: [mockItem],
      categories: ['All', 'Main'],
      selectedCategory: 'All',
      currentIndex: 1,
      quantities: { [mockItem.id]: 2 },
      status: 'idle',
    };

    renderWithStore(preloadedItemsState);

    const input = await screen.findByRole('spinbutton');

    await act(async () => {
      fireEvent.change(input, { target: { value: '5' } });
    });

    expect(screen.getByDisplayValue('5')).toBeInTheDocument();
  });
});
