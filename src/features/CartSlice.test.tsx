import cartReducer, {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
  decreaseItemQuantity,
} from './CartSlice';

describe('cartSlice reducer', () => {
  const initialState = { items: [] };

  it('adds an item to an empty cart', () => {
    const action = addToCart({
      id: '1',
      meal: 'Pizza',
      price: 10,
      img: 'img1',
      quantity: 2,
    });
    const state = cartReducer(initialState, action);
    expect(state.items.length).toBe(1);
    expect(state.items[0].quantity).toBe(2);
  });

  it('increases quantity if the item already exists', () => {
    const stateWithItem = {
      items: [{ id: '1', meal: 'Pizza', price: 10, img: 'img1', quantity: 2 }],
    };
    const action = addToCart({
      id: '1',
      meal: 'Pizza',
      price: 10,
      img: 'img1',
      quantity: 3,
    });
    const state = cartReducer(stateWithItem, action);
    expect(state.items.length).toBe(1);
    expect(state.items[0].quantity).toBe(5);
  });

  it('removes an item from the cart', () => {
    const stateWithItems = {
      items: [
        { id: '1', meal: 'Pizza', price: 10, img: 'img1', quantity: 2 },
        { id: '2', meal: 'Burger', price: 5, img: 'img2', quantity: 1 },
      ],
    };
    const action = removeFromCart('1');
    const state = cartReducer(stateWithItems, action);
    expect(state.items.length).toBe(1);
    expect(state.items[0].id).toBe('2');
  });

  it('updates the quantity of an item', () => {
    const stateWithItems = {
      items: [{ id: '1', meal: 'Pizza', price: 10, img: 'img1', quantity: 2 }],
    };
    const action = updateCartItemQuantity({ id: '1', quantity: 5 });
    const state = cartReducer(stateWithItems, action);
    expect(state.items[0].quantity).toBe(5);
  });

  it('clears the cart', () => {
    const stateWithItems = {
      items: [{ id: '1', meal: 'Pizza', price: 10, img: 'img1', quantity: 2 }],
    };
    const state = cartReducer(stateWithItems, clearCart());
    expect(state.items.length).toBe(0);
  });

  it('decreases item quantity and removes the item if quantity becomes 0', () => {
    const stateWithItem = {
      items: [{ id: '1', meal: 'Pizza', price: 10, img: 'img1', quantity: 1 }],
    };
    const state = cartReducer(stateWithItem, decreaseItemQuantity('1'));
    expect(state.items.length).toBe(0);
  });
});
