import { customerResetContants } from "../actions/constants";

const initState = {
  error: null,
  message: "",
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case customerResetContants.CUSTOMER_RESET_PASSWORD_REQUEST:
      state = {
        ...state,
        message: "",
        loading: true,
      };
      break;
    case customerResetContants.CUSTOMER_RESET_PASSWORD_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
      };
      break;
    case customerResetContants.CUSTOMER_RESET_PASSWORD_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case customerResetContants.CUSTOMER_RESET_PASSWORD_REINITIALISE:
      state = {
        ...state,
        loading: false,
        error: "",
        message: "",
      };
      break;
  }

  return state;
};
