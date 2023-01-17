import React from 'react';
import { shallow, mount } from 'enzyme';
import Carer from './Carer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../../redux/rootReducer';
import { middleware } from '../../../redux/store';

const store = createStore(rootReducer, applyMiddleware(...middleware));

describe('Carer components', () => {
  it('renders Carer component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Carer />
      </Provider>
    );
    expect(wrapper.find('.carer__container')).toBe('carer__container');
    console.log('herestore111111111', wrapper);
  });
});
