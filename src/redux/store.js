import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import cartReducer from "./reducers/cartReducer";

const initialState = {
  products: [],
  cartItems: [],
  total: 0,
  loading: false,
  comparisonItems: [],
  shipping: false
};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  cartReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
