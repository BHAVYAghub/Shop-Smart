import axios from "../helpers/axios";
import { customerContants } from "./constants";
//export is default so we don't have to write exact name of the export

export const customerSignup = (user) => {
  console.log(user);

  return async (dispatch) => {
    dispatch({ type: customerContants.CUSTOMER_REGISTER_REQUEST });
    const res = await axios.post(`/signup`, {
      ...user,
    });

    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: customerContants.CUSTOMER_REGISTER_SUCCESS,
        payload: { message },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: customerContants.CUSTOMER_REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};
