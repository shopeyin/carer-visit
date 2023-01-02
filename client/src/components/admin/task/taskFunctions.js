import axios from 'axios';
export const addTaskToUser = async (serviceuserId, data) => {
  try {
    await axios.post(`/api/v1/task/${serviceuserId}`, data);
   
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllTaskofaServiceUser = async (serviceuserId) => {
  try {
    const serviceUserData = await axios.get(`/api/v1/task/${serviceuserId}`);
    const {
      data: { data },
    } = serviceUserData;
    return data.task.tasks;
  } catch (error) {
    console.log(error);
  }
};

export const handleDeleteTask = async (id) => {
  try {
    await axios.delete(`/api/v1/task/${id}`);
  } catch (error) {
    console.log(error);
  }
};
