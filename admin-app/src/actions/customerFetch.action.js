import axios from "../helpers/axios";
import { customerFetchContants } from "./constants";
//export is default so we don't have to write exact name of the export

export const customerFetch = (tok) => {
  return async (dispatch) => {
    dispatch({ type: customerFetchContants.CUSTOMER_FETCH_REQUEST });
    const res = await axios.get(`/fetch`);

    if (res.status === 200) {
      const { message } = res.data;
      dispatch({
        type: customerFetchContants.CUSTOMER_FETCH_SUCCESS,
        payload: { user: message },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: customerFetchContants.CUSTOMER_FETCH_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};
