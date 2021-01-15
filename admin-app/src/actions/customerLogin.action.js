import axios from "../helpers/axios";
import { customerLoginConstants } from "./constants";
//export is default so we don't have to write exact name of the export

export const customerLogin = (user) => {
  console.log(user);

  return async (dispatch) => {
    //cors:cross origin resource share policy

    dispatch({ type: customerLoginConstants.CUSTOMER_LOGIN_REQUEST });
    const res = await axios.post("/signin", {
      ...user,
    });

    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: customerLoginConstants.CUSTOMER_LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      if (res.status == 400) {
        dispatch({
          type: customerLoginConstants.CUSTOMER_LOGIN_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    }
  };
};
// export const isCustomerLoggedIn = () => {
//   return async (dispatch) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const user = JSON.parse(localStorage.getItem("user"));
//       dispatch({
//         type: customerLoginConstants.CUSTOMER_LOGIN_SUCCESS,
//         payload: {
//           token,
//           user,
//         },
//       });
//     } else {
//       dispatch({
//         type: customerLoginConstants.CUSTOMER_LOGIN_FAILURE,
//         payload: {
//           error: "Failed to Login",
//         },
//       });
//     }
//   };
// };
export const customerSignout = () => {
  return async (dispatch) => {
    dispatch({ type: customerLoginConstants.CUSTOMER_LOGOUT_REQUEST });
    const res = await axios.post(`/signout`);

    if (res.status === 200) {
      localStorage.clear();

      dispatch({ type: customerLoginConstants.CUSTOMER_LOGOUT_SUCCESS });
    } else {
      dispatch({
        type: customerLoginConstants.CUSTOMER_LOGOUT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
