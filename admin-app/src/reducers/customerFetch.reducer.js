import { customerFetchContants } from "../actions/constants";

const initState = {
  profile: {
    firstName: "",
    lastName: "",
    email: "",
  },
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case customerFetchContants.CUSTOMER_FETCH_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case customerFetchContants.CUSTOMER_FETCH_SUCCESS:
      state = {
        ...state,
        profile: action.payload.user,
        loading: false,
      };
      break;

    case customerFetchContants.CUSTOMER_FETCH_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
  }
  return state;
};
