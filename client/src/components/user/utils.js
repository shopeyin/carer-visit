import axios from 'axios';

export const addVisitInfo = async (data) => {
  try {
    await axios.post(`/api/v1/visit/visitInformation/`, data);
    console.log('submitted');
  } catch (error) {
    console.log(error);
  }
};

export const fetchVisit = async (currentUserId, visitDate) => {
  try {
    const visitData = await axios.post(
      `/api/v1/visit/${currentUserId}`,
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
