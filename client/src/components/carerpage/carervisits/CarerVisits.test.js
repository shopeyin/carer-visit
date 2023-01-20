import { shallow, mount } from 'enzyme';
import React from 'react';
import CarerVisits from './CarerVisits';
import shallowToJson from 'enzyme-to-json';
import { fetchVisit } from '../utils';

import axios from 'axios';
jest.mock('axios');

describe('CarerVisit component', () => {
  it('renders carervisit component', () => {
    let mockCurrentUser = {
      barePassword: '123456',
      email: 'belinda@gmail.com',
      name: 'Belinda',
      password: '12456',
      role: 'carer',

      _id: '62bc001b2105fc4bd8981d70',
    };
    const wrapper = mount(<CarerVisits currentUser={mockCurrentUser} />);
   // console.log('PROPSSSS', wrapper.props());
    // console.log(wrapper.state('serviceUsersVisit'));

    //expect(wrapper.exists()).toBe(true);
    expect(wrapper.props().currentUser).toEqual(mockCurrentUser);
    // expect(wrapper.state('serviceUsersVisit').length).toEqual(0);
  });
});

// TESTING ASYNC FUNCTION
// describe('when the fetchVisit function is called', () => {
//   it('should return an accurate visit', async () => {
//     let visitDate = {
//       dateOfVisit: '2022-08-31T00:00:00.000+00:00',
//     };
//     let visit = await fetchVisit('62bc001b2105fc4bd8981d70', visitDate);

//     expect(visit.length).toBe(1);
//   });
//   it('should return an empty visit', async () => {
//     let visitDate = {
//       dateOfVisit: '2022-08-30T00:00:00.000+00:00',
//     };
//     let visit = await fetchVisit('62bc001b2105fc4bd8981d70', visitDate);

//     expect(visit.length).toBe(0);
//   });
// });

//TESTING MOCK FETCH
describe('MOCK FETCH OF fetchVisit', () => {
  it('should fetch a single visit', async () => {
    const mockData = {
      status: 200,
      data: {
        data: {
          visit: [
            {
              serviceusersToVisit: [[Object], [Object]],
              _id: '630efa2ebee1820ea0ae9066',
              careruser: '123',
              __v: 0,
              dateOfVisit: '2022-08-31T00:00:00.000Z',
            },
          ],
        },
      },
    };

    let visitDate = {
      dateOfVisit: '2022-08-31T00:00:00.000Z',
    };

    axios.post.mockResolvedValue(mockData);

    // jest.spyOn(axios, 'post').mockResolvedValue(mockData);

    let visit = await fetchVisit('123', visitDate);
    // console.log(visit);
    expect(visit.length).toBe(1);
  });
});

// describe("carer visit component", () => {
//   let mockCurrentUser = {
//     role: "carer",
//     _id: 1,
//     name: "belinda",
//     barePassword: "123456",
//     email: "belinda@gmail.com",
//     password: "12345666665667",
//   };

//   const wrapper = shallow(<CarerVisits currentUser={mockCurrentUser} />);

//   it("expect to render carervisit component", () => {
//     //expect(shallowToJson(wrapper)).toMatchSnapshot();

//     expect(wrapper.find(".container-fluid").length).toBe(1);
//   });

//   // it("calls fetch visit api with accurate data", async () => {
//   //   expect.assertions(1);

//   //   let visitDate = {
//   //     dateOfVisit: "2022-08-17T00:00:00.000+00:00",
//   //   };

//   //   let result = await fetchVisit("62bc001b2105fc4bd8981d70", visitDate);
//   //   console.log(result);

//   //   expect(result.length).toBe(1);
//   // });

//   // it("calls fetch visit api with inaccurate data", async () => {
//   //   let visitDate = {
//   //     dateOfVisit: "2022-08-17T00:00:00.000+00:00",
//   //   };

//   //   let result = await fetchVisit("62bc001b2105fc4bd8981d78", visitDate);

//   //   expect(result.length).toBe(0);
//   // });

// });

// // let wrapper;

// // beforeEach(() => {
// //   const mockProps = {
// //     currentUser: "ola",
// //   };
// //   wrapper = shallow(<CarerVisits {...mockProps} />);
// // });

// // it("expect to render CarerVisit component", () => {
// //   expect(shallowToJson(wrapper)).toMatchSnapshot();
// // });
