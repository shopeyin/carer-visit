import CarerActionTypes from './carer-type';
import * as actions from './carer-action';



describe('testing carer actions', () => {
  it('should start getCarer action', () => {
    expect(actions.getCarers().type).toEqual(CarerActionTypes.GET_CARERS);
  });

  it('should setCarer action', () => {
    let newCarer = {
      barePassword: '123',
      email: 'femi@gmail.com',
      name: 'femi',
      password: '123',
      role: 'admin',
      __v: 0,
      _id: '3',
    };
    expect(actions.setCarer().type).toEqual(CarerActionTypes.SET_CARERS);
    expect(actions.setCarer(newCarer).payload).toEqual(newCarer);
  });

  it('should getCarerFailure', () => {
    expect(actions.getCarerFailure().type).toEqual(
      CarerActionTypes.GET_CARERS_FAILURE
    );
  });

  it('should fetchCarer action', () => {
    const mockActionCreator = actions.fetchCarers();
    const mockDispatch = jest.fn();
    mockActionCreator(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.getCarers());
  });
});
