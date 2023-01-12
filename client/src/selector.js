import { createSelector } from 'reselect';

export const userSelector = (state) => state.user.currentUser;

export const carersSelector = (state) => state.carers;

export const selectCarers = createSelector([carersSelector], (carers) => {
  console.log('fetching carerso oooooo');
  return carers.carers;
});

// export const selectCartItems = createSelector(
//   [selectCart],
//   (cart) => cart.cartItems
// );
