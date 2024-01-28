import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        products: [
            {
                "sku": 1,
                "name": "Red Product",
                "description": "Red Product description",
                "price": 1.01,
                "basketLimit": 5
            },
            {
                "sku": 2,
                "name": "Orange Product",
                "description": "Orange Product description",
                "price": 2.02,
                "basketLimit": 4
            },
            {
                "sku": 3,
                "name": "Yellow Product",
                "description": "Yellow Product description",
                "price": 3.03,
                "basketLimit": 3
            },
            {
                "sku": 4,
                "name": "Green Product",
                "description": "Green Product description",
                "price": 4.04,
                "basketLimit": 2
            },
            {
                "sku": 5,
                "name": "Blue Product",
                "description": "Blue Product description",
                "price": 5.05,
                "basketLimit": 1
            }
        ],
        cart: [],
        total: 0,
    },
    reducers: {
        addToBasket: (state, action) => {
            const productId = action.payload;
            const product = state.products.find(item => item.sku === productId);

            if (product) {
                const existingCartItem = state.cart.find(item => item.sku === productId);
                if (!existingCartItem || existingCartItem.quantity < product.basketLimit) {
                    if (existingCartItem) {
                        existingCartItem.quantity += 1;
                    } else {
                        state.cart.push({ ...product, quantity: 1 });
                    }
                    state.total += product.price;
                }
            }
        },
        removeFromBasket: (state, action) => {
            const productId = action.payload;
            const existingCartItem = state.cart.find(item => item.sku === productId);

            if (existingCartItem) {
                if (existingCartItem.quantity > 1) {
                    existingCartItem.quantity -= 1;
                } else {
                    const cartIndex = state.cart.findIndex(item => item.sku === productId);
                    state.cart.splice(cartIndex, 1);
                }
                state.total -= existingCartItem.price;
            }
        },
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;