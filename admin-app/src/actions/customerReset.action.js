import axios from "../helpers/axios";
import { customerResetContants } from "./constants";
//export is default so we don't have to write exact name of the export

export const customerReset = (user) => {
  console.log(user);

  return async (dispatch) => {
    dispatch({ type: customerResetContants.CUSTOMER_RESET_PASSWORD_REQUEST });
    const res = await axios.post(`/resetPassword`, {
      ...user,
    });

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: customerResetContants.CUSTOMER_RESET_PASSWORD_SUCCESS,
        payload: { message },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: customerResetContants.CUSTOMER_RESET_PASSWORD_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

export const customerResetReinitialise = () => {
  return (dispatch) => {
    dispatch({ type: customerResetContants.CUSTOMER_RESET_PASSWORD_REQUEST });
  };
};
