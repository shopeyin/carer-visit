
import API from '../../../API';
export const addTaskToUser = async (serviceuserId, data) => {
  try {
    await API.post(`/${serviceuserId}`, data);
    console.log("ASYNC submitted");
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllTaskofaServiceUser = async (serviceuserId) => {
  try {
    const serviceUserData = await API.get(`/${serviceuserId}`);
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
    await API.delete(`/${id}`);
   
  } catch (error) {
    console.log(error);
  }
};


