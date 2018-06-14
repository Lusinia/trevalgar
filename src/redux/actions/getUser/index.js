import * as types from './actionTypes';


/* Action Creator */
export const fetchUserData = payload => ({
  type: types.USERDATA,
  payload
});


/* Dispatch the actionCreator */

export const getUser = (ID) => dispatch => {
  dispatch(fetchUserData(ID));
};



