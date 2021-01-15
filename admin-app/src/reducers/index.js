import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import userReducer from "./user.reducers";
import productReducer from "./product.reducer";
import categoryReducer from "./category.reducer";
import orderReducer from "./order.reducer";
import customerLoginReducer from "./customerLogin.reducer";
import customerSignupReducer from "./customerRegister.reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  product: productReducer,
  customerLogin: customerLoginReducer,
  customerSignup: customerSignupReducer,
  order: orderReducer,
});

export default rootReducer;
