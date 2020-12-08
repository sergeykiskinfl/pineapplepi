import {
  LOADING_DATA,
  SET_PRODUCTS,
  SET_PRODUCT,
  SET_CART_ITEM,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  WITH_SHIPPING,
  WITHOUT_SHIPPING,
  SET_COMPARISON_ITEM,
  REMOVE_ITEM_FROM_COMPARISON
} from "../types";

export default function(state, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case SET_PRODUCT:
      return {
        ...state,
        highlightedProduct: action.payload,
        loading: false
      };
    case SET_CART_ITEM:
      let cartItem = state.products.find(product => product.id === action.id);

      // Set a product from a specification page to the cart
      if (!cartItem) {
        let cartItemHlProduct = state.highlightedProduct;
        cartItemHlProduct.quantity = 1;
        let newTotal = state.total + cartItemHlProduct.price;
        return {
          ...state,
          cartItems: [...state.cartItems, cartItemHlProduct],
          total: newTotal
        };
      }

      //Check if the action id exists in the cartItems
      let existedItem = state.cartItems.find(item => item.id === action.id);

      if (existedItem) {
        return state;
      } else {
        cartItem.quantity = 1;
        // Calculating the total
        let newTotal = state.total + cartItem.price;
        return {
          ...state,
          cartItems: [...state.cartItems, cartItem],
          total: newTotal
        };
      }

    case SET_COMPARISON_ITEM:
      let comparisonItem = state.products.find(
        product => product.id === action.id
      );

      // Set a product from a specification page to the comparison page
      if (!comparisonItem) {
        let comparisonHlProduct = state.highlightedProduct;

        return {
          ...state,
          comparisonItems: [...state.comparisonItems, comparisonHlProduct]
        };
      }

      //Check if the action id exists in the comparisonItems
      let existedComparisonItem = state.comparisonItems.find(
        item => item.id === action.id
      );

      if (existedComparisonItem) {
        return state;
      } else {
        return {
          ...state,
          comparisonItems: [...state.comparisonItems, comparisonItem]
        };
      }

    case REMOVE_ITEM_FROM_CART:
      let itemToRemove = state.cartItems.find(item => action.id === item.id);
      let newCartItems = state.cartItems.filter(item => action.id !== item.id);

      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;

      return {
        ...state,
        cartItems: newCartItems,
        total: newTotal
      };

    case REMOVE_ITEM_FROM_COMPARISON:
      let newComparisonItems = state.comparisonItems.filter(
        item => action.id !== item.id
      );

      return {
        ...state,
        comparisonItems: newComparisonItems
      };

    case INCREASE_QUANTITY:
      let increaseItem = state.cartItems.find(item => action.id === item.id);
      increaseItem.quantity += 1;
      let newIncreaseTotal = state.total + increaseItem.price;

      return {
        ...state,
        total: newIncreaseTotal
      };

    case DECREASE_QUANTITY:
      let decreaseItem = state.cartItems.find(item => action.id === item.id);
      if (decreaseItem.quantity === 1) {
        let newCartItems = state.cartItems.filter(
          item => action.id !== item.id
        );
        let newDecreaseTotal = state.total - decreaseItem.price;
        return {
          ...state,
          cartItems: newCartItems,
          total: newDecreaseTotal
        };
      } else {
        decreaseItem.quantity -= 1;
        let newTotal = state.total - decreaseItem.price;
        return {
          ...state,
          total: newTotal
        };
      }

    case WITH_SHIPPING:
      return {
        ...state,
        shipping: true,
        total: state.total + 5
      };

    case WITHOUT_SHIPPING:
      return {
        ...state,
        shipping: false,
        total: state.total - 5
      };

    default:
      return state;
  }
}
