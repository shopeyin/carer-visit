import CarerReducer from './carer-reducer';
import * as actions from './carer-action';
import CarerActionTypes from './carer-type';

describe('carerReducer', () => {
  it('should return the initial state', () => {
    expect(CarerReducer(undefined, { type: undefined })).toEqual({
      carers: [],
      loading: false,
      hasErrors: false,
    });
  });

  it('loading the carer', () => {
    const INITIAL_STATE = {
      carers: [],
      loading: false,
      hasErrors: false,
    };

    expect(CarerReducer(INITIAL_STATE, actions.getCarers())).toEqual({
      carers: [],
      loading: true,
      hasErrors: false,
    });
  });

  it('setting the carer', () => {
    const INITIAL_STATE = {
      carers: [],
      loading: true,
      hasErrors: false,
    };

    let newCarer = {
      barePassword: '123',
      email: 'femi@gmail.com',
      name: 'femi',
      password: '123',
      role: 'admin',
      __v: 0,
      _id: '3',
    };

    // expect(CarerReducer(INITIAL_STATE, actions.setCarer(newCarer))).toEqual({
    //   carers: newCarer,
    //   loading: false,
    //   hasErrors: false,
    // });
    const setCarerAction = {
      type: CarerActionTypes.SET_CARERS,
      payload: newCarer,
    };
    expect(CarerReducer(INITIAL_STATE, setCarerAction)).toEqual({
      carers: newCarer,
      loading: false,
      hasErrors: false,
    });
  });

  it('testing when fetching carers fail', () => {
    const INITIAL_STATE = {
      carers: [],
      loading: true,
      hasErrors: false,
    };

    expect(CarerReducer(INITIAL_STATE, actions.getCarerFailure())).toEqual({
      carers: [],
      loading: false,
      hasErrors: true,
    });
  });
});
