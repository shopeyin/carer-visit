import CarerReducer from './carer-reducer';
import * as actions from './carer-action';

let initial_state = {
  carers: [],
  loading: false,
  hasErrors: false,
};

describe('carerReducer', () => {
  it('should return the initial state', () => {
    expect(CarerReducer(undefined, { type: undefined })).toEqual(initial_state);
  });

  it('loading the carer', () => {
    expect(CarerReducer(initial_state, actions.getCarers())).toEqual({
      ...initial_state,
      loading: true,
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

    expect(CarerReducer(INITIAL_STATE, actions.setCarer(newCarer))).toEqual({
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
