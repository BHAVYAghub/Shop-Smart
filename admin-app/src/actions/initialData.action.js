import { findAllByDisplayValue } from "@testing-library/react";
import axios from "../helpers/axios";
import { initialDataConstants, productConstants } from "./constants";

export const getInitialData = () => {
  return async (dispatch) => {
    const res = await axios.post("/initialdata");
    if (res.status === 200) {
      const { categories, products } = res.data;
      dispatch({
        type: initialDataConstants.GET_ALL_INITIAL_DATA_SUCCESS,
        payload: { categories },
      });
      dispatch({
        type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
        payload: { products },
      });
    }
    console.log(res);
  };
};
