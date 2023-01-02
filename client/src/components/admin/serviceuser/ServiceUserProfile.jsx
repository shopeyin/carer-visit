import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchAllTaskofaServiceUser,
  handleDeleteTask,
} from '../task/taskFunctions';
import Task from '../task/Task';
function ServiceUserProfile() {
  const [tasks, setTasks] = useState([]);
  const [hideTaskToggle, setHideTaskTooggle] = useState(false);
  const [reloadData, setReloadData] = useState(false);

  const params = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      let data = await fetchAllTaskofaServiceUser(params.serviceuserId);
      setTasks(data);

      console.log('fetchTaskcalled');
    };
    console.log('fetch task compoonent');
    fetchTask();
  }, [params.serviceuserId, reloadData]);

  let serviceuser;

  useSelector((state) => {
    const found = state.serviceUsers.serviceUsers.find(
      (element) => element._id === params.serviceuserId
    );

    serviceuser = found;
  });

  const taskToggle = () => {
    setHideTaskTooggle(!hideTaskToggle);
  };
  const remountComponent = () => {
    setReloadData(!reloadData);
  };

  return (
    <div className="serviceuser__container">
      {' '}
      <div className="row pt-4">
        <div className="col-md-6">
          {' '}
          <h4>
            List of <span className="text-uppercase">{serviceuser.name}</span>'s{' '}
            activities/Task
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <button onClick={taskToggle} className="btn btn-info">
            Add task
          </button>
        </div>
      </div>
      {hideTaskToggle ? (
        <div className="row">
          <div className="col-md-6">
            {' '}
            <Task
              serviceuserId={serviceuser._id}
              taskToggle={taskToggle}
              remountComponent={remountComponent}
            />
          </div>
        </div>
      ) : (
        ''
      )}
      {tasks.map((task) => {
        return (
          <div key={task._id} className="row mt-2">
            <div className="col-6 col-sm-5 col-md-4">
              <div className="card" style={{ width: '100%' }}>
                <div className="card-body">
                  <h4 className="card-title text-center text-uppercase">
                    {' '}
                    {task.nameOfTask}
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-3 col-sm-1 col-md-3 text-center p-4 trash-can">
              <i
                className="fa-solid fa-trash-can mt-2"
                onClick={() => {
                  handleDeleteTask(task._id);
                  remountComponent();
                }}
              ></i>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ServiceUserProfile;
