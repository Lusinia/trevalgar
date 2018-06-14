import Immutable from 'seamless-immutable';
import * as type from '../actions/getUser/actionTypes';

const initialState = Immutable({
  userInfo: null,
});

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case type.USERDATA:
      return state.merge({
        userInfo: action.payload
      });
    default:
      return state;
  }
};
