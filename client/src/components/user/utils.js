import axios from 'axios';
import API from '../../API';

export const addVisitInfo = async (data) => {
  try {
    await API.post(`/visitInformation/`, data);
    console.log('submitted');
  } catch (error) {
    console.log(error);
  }
};

export const fetchVisit = async (currentUserId, visitDate) => {
  try {
    const visitData = await API.post(
      `/visit/${currentUserId}`,
      visitDate
    );

    const {
      data: {
        data: { visit },
      },
    } = visitData;

    return visit;
  } catch (err) {
    return err;
  }
};

