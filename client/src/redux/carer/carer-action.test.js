import CarerActionTypes from './carer-type';
import * as actions from './carer-action';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('testing carer actions', () => {
  it('handles getCarer action', () => {
    const store = mockStore();
    store.dispatch(actions.fetchCarers());
    const action = store.getActions();
    // console.log(action);
    // console.log(action[0]);

    const expectedActions = {
      type: CarerActionTypes.GET_CARERS,
    };

    expect(action[0]).toEqual(expectedActions);
  });

  it('handles setCarer action', () => {
    const expectedActions = {
      type: CarerActionTypes.SET_CARERS,
    };

    // expect(action).toEqual(expectedActions);

    const store = mockStore();
    return store.dispatch(actions.fetchCarers()).then(() => {
      const action = store.getActions();
      console.log(action);
      expect(action[1].type).toEqual(expectedActions.type);
    });

    // console.log(action[0]);

    // const expectedActions = {
    //   type: CarerActionTypes.SET_CARERS,
    // };

    // expect(action).toEqual(expectedActions);
  });
});
