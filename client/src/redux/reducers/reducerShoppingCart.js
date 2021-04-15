/*eslint-disable*/

import * as TYPES from '../types/index';

const initialState = {
	shoppingCart: [],
};

export default function reducerShoppingCart(state = initialState, action) {
	switch (action.type) {
		case TYPES.ADD_TO_CART:
			return {
				...state,
				shoppingCart: [...state.shoppingCart].concat(action.payload),
			};
		case TYPES.REMOVE_FROM_CART:
			return {
				...state,
				shoppingCart: state.shoppingCart.filter((item) => item.id !== action.payload.id),
			};
		default:
			return state;
	}
}
