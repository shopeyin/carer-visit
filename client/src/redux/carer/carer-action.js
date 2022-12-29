import CarerActionTypes from './carer-type';
import axios from 'axios';
const urlVersion = '/api/v1/';
export const getCarers = () => ({
  type: CarerActionTypes.GET_CARERS,
});

export const setCarer = (carer) => ({
  type: CarerActionTypes.SET_CARERS,
  payload: carer,
});

export const getCarerFailure = () => ({
  type: CarerActionTypes.GET_CARERS_FAILURE,
});

export const createCarer = (carer) => ({
  type: CarerActionTypes.CREATE_CARERS,
  payload: carer,
});

export function fetchCarers() {
  return async (dispatch) => {
    dispatch(getCarers());

    try {
      let url = '/carers';

      const carerData = await axios.get(url);
      console.log('CARER DATA HERE', carerData);

      let {
        data: {
          data: { users },
        },
      } = carerData;

      dispatch(setCarer(users));
    } catch (error) {
      dispatch(getCarerFailure());
    }
  };
}

export function createNewCarer(dataInfo, callBack) {
  console.log('i was called');
  return async (dispatch) => {
    try {
      const newCarer = await axios.post(`${urlVersion}carers`, dataInfo);

      let {
        data: { user },
      } = newCarer;
      console.log('DATA', user);

      dispatch(createCarer(user));
      callBack();
    } catch (error) {
      console.log(error.message);
    }
  };
}
