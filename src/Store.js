import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
//the way rootReducer works is that if you have say log reducer or tech reducer or any different multiple reducers, you bring them into the root reducer adn then you will be able to use them

const initialState = {};

const middleware = [thunk];

//then we create store and we pass the reducer, state and the google dev tools which passes in applymiddleware and then spread the middleware onto there.
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
