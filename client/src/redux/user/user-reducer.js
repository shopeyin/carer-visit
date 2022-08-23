import UserActionTypes from './user-type';
const INITIAL_STATE = {
  currentUser: null,
  error: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        error: false,
      };
    case UserActionTypes.SET_CURRENT_USER_FAILURE:
      return {
        ...state,
        error: true,
      };
    case UserActionTypes.SIGN_OUT:
      return {
        ...state,
        currentUser: null,
        error: false,
      };

    default:
      return state;
  }
};

export default userReducer;
