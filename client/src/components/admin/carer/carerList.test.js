import React from 'react';
import { shallow } from 'enzyme';
import CarerList from './CarerList';

describe('CarerList component', () => {
  describe('CarerList component', () => {
    let wrapper;
    let carers = [
      { _id: '1', name: 'Carer 1' },
      { _id: '2', name: 'Carer 2' },
    ];
    let handleDeleteCarerMock = jest.fn();

    beforeEach(() => {
      wrapper = shallow(
        <CarerList carers={carers} handleDeleteCarer={handleDeleteCarerMock} />
      );
    });

    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render carers when carers is not null', () => {
      expect(wrapper.find('.carer__container-item').length).toEqual(2);
    });

    it('should call handleDeleteCarer when trash icon is clicked', () => {
      wrapper.find('.fa-trash-can').first().simulate('click');
      expect(handleDeleteCarerMock).toHaveBeenCalledWith('1');
    });
  });

  it('should render  when carers is an empty array', () => {
    let carers = [];
    let handleDeleteCarerMock = jest.fn();
    let wrapper2 = shallow(
      <CarerList carers={carers} handleDeleteCarer={handleDeleteCarerMock} />
    );
    expect(wrapper2.find('.carer__container-item').length).toEqual(0);
  });
});
