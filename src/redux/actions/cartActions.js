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

import axios from "axios";

axios.defaults.baseURL =
  "YOUR_DATABASE_URL";

/**
 * Get all items from the firestore base
 */
export const getProducts = () => async dispatch => {
  try {
    dispatch({ type: LOADING_DATA });

    let res = await axios.get("/products/");

    dispatch({ type: SET_PRODUCTS, payload: res.data });
  } catch (err) {
    dispatch({ type: SET_PRODUCTS, payload: [] });
    console.error(err);
  }
};

/**
 * Get an item from the firestore base
 * @param {*} id the item id
 */
export const getProduct = id => async dispatch => {
  try {
    dispatch({ type: LOADING_DATA });
    let res = await axios.get(`/product/${id}`);
    dispatch({ type: SET_PRODUCT, payload: res.data });
  } catch (err) {
    dispatch({ type: SET_PRODUCT, payload: [] });
    console.error(err);
  }
};

/**
 * Set an item in the cart
 * @param {*} id the item id
 */
export const setCartItem = id => dispatch =>
  dispatch({
    type: SET_CART_ITEM,
    id
  });

/**
 * Remove an item from the cart
 * @param {*} id the item id
 */
export const removeCartItem = id => dispatch =>
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    id
  });

/**
 * Set an item item in the comparison
 * @param {*} id the item id
 */
export const setComparisonItem = id => dispatch =>
  dispatch({
    type: SET_COMPARISON_ITEM,
    id
  });

/**
 * Remove an item from the comparison
 * @param {*} id the item id
 */

export const removeComparisonItem = id => dispatch =>
  dispatch({
    type: REMOVE_ITEM_FROM_COMPARISON,
    id
  });

/**
 * Increase the item quantity
 * @param {*} id the item id
 */
export const increaseQuantity = id => dispatch =>
  dispatch({
    type: INCREASE_QUANTITY,
    id
  });

/**
 * Decrease the item quantity
 * @param {*} id the item id
 */
export const decreaseQuantity = id => dispatch =>
  dispatch({
    type: DECREASE_QUANTITY,
    id
  });

/**
 * With shipping
 */
export const withShipping = () => dispatch =>
  dispatch({
    type: WITH_SHIPPING
  });

/**
 * Without shipping
 */
export const withoutShipping = () => dispatch =>
  dispatch({
    type: WITHOUT_SHIPPING
  });
