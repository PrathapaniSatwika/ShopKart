// cartActions.js
import {
    CART_ITEMS_REQUEST,
    CART_ITEMS_SUCCESS,
    CART_ITEMS_FAIL,
    CART_DELETE_REQUEST,
    CART_DELETE_SUCCESS,
    CART_DELETE_FAIL,
  } from '../constants/cartConstants';
  
  export const listCartItems = () => async (dispatch, getState) => {
    try {
      dispatch({ type: CART_ITEMS_REQUEST });
  
      const { userLogin } = getState();
      const { token } = userLogin.userInfo;
  
      const response = await fetch('/api/cart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
  
      const data = await response.json();
  
      if (data.error) {
        dispatch({ type: CART_ITEMS_FAIL, payload: data.error });
      } else {
        dispatch({ type: CART_ITEMS_SUCCESS, payload: data });
      }
    } catch (error) {
      dispatch({ type: CART_ITEMS_FAIL, payload: 'Error fetching cart items' });
    }
  };
  