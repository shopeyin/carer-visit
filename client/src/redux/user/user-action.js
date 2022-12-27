import UserActionTypes from './user-type';
import axios from 'axios';
import { BASE_URL } from '../../App';
import API from '../../API';

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
      let url = 'https://carer-visit.herokuapp.com/api/v1/';
      console.log('URLLLL-ereeee', url);
      // const loggedInUser = await API.post(`carers/login`, userdata);
      const loggedInUser = await axios.post(`${url}carers/login`, userdata);

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

export const fetchUserData = () => {
  return async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('Authtoken')}`,
      },
    };
    try {
      const { data } = await await API.get(`/private`, config);
      console.log(data.data);
      dispatch(setCurrentUser(data.data));
    } catch (error) {
      localStorage.removeItem('Authtoken');
    }
  };
};
