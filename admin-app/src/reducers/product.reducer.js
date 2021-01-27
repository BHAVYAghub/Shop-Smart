import { productConstants } from "../actions/constants";

const initialState = {
  products: [],
  productsByPrice:{
    under5k:[],
    under10k:[],
    under15k:[],
    under20k:[],
    under30k:[]
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCTS_SUCCESS:
      state = {
        ...state,
        products: action.payload.products,
      };
      break;
  }

  return state;
};
