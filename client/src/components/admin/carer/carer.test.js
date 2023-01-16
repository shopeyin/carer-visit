import React from 'react';
import { shallow } from 'enzyme';

import { Provider } from 'react-redux';
import Carer from './Carer';

describe('Carer components', () => {
  let store = {};
  it('renders Carer component', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Carer />
      </Provider>
    );
    console.log(wrapper);
  });
});
