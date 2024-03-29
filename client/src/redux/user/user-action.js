import UserActionTypes from './user-type';
import axios from 'axios';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
export const logOutUser = () => ({
  type: UserActionTypes.SIGN_OUT,
});

export const setCurrentUserFailure = () => ({
  type: UserActionTypes.SET_CURRENT_USER_FAILURE,
});

export function login(userdata) {
  return async (dispatch) => {
    try {
      // const loggedInUser = await API.post(`carers/login`, userdata);
      const loggedInUser = await axios.post(`/api/v1/carers/login`, userdata);

      let { data } = loggedInUser;

      localStorage.setItem('Authtoken', data.token);
      dispatch(setCurrentUser(data.user));
    } catch (error) {
      console.log(error.response.data);
      localStorage.removeItem('Authtoken');
      dispatch(setCurrentUserFailure());
    }
  };
}

// export const fetchUserData = () => {
//   return async (dispatch) => {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('Authtoken')}`,
//       },
//     };
//     try {
//       const { data } = await await API.get(`/private`, config);
//       console.log(data.data);
//       dispatch(setCurrentUser(data.data));
//     } catch (error) {
//       localStorage.removeItem('Authtoken');
//     }
//   };
// };
