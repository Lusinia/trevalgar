import * as types from './actionTypes';


/* Action Creator */
export const displayError = payload => ({
  type: types.ERROR,
  payload
});


/* Dispatch the actionCreator */

export const setError = (info) => dispatch => {
  dispatch(displayError(info));
};



