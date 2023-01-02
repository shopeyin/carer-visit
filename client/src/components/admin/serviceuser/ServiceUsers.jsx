import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchServiceUsers } from '../../../redux/serviceUser/serviceuser-action';
import axios from 'axios';
import { reMount } from '../../../redux/remount/remount-action';
import './serviceuser.style.scss';
function ServiceUsers({
  loading,
  serviceUsers,
  fetchServiceUsers,
  reMount,
  reMountComponent,
}) {
  useEffect(() => {
    fetchServiceUsers();
  }, [fetchServiceUsers, reMountComponent]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/v1/serviceusers/${id}`);
      reMount();
    } catch (error) {
      console.log(error);
    }
  };

  let itemsToRender;
  if (serviceUsers) {
    itemsToRender = serviceUsers.map((serviceuser) => {
      return (
        <div className="row" key={serviceuser._id}>
          <div className="col-6 col-sm-4 col-md-4">
            <Link to={`${serviceuser._id}`} className="link-color">
              <div className="card" style={{ width: '100%' }}>
                <div className="card-body">
                  <h4 className="card-title text-center text-uppercase">
                    {' '}
                    {serviceuser.name}
                  </h4>
                </div>
              </div>
            </Link>{' '}
          </div>
          <div className="col-3 col-sm-3 col-md-2 text-center p-4">
            <div>
              <Link to={`edit/${serviceuser._id}`}>
                <i className="fa-solid fa-pen link-color"></i>
              </Link>
            </div>
          </div>
          <div className="col-3 col-sm-3 col-md-2 text-center p-4">
            {' '}
            <i
              className="fa-solid fa-trash-can mt-2 trash-can"
              onClick={() => {
                handleDelete(serviceuser._id);
              }}
            ></i>
          </div>
        </div>
      );
    });
  } else {
    itemsToRender = 'Loading...';
  }

  return (
    <div className="serviceuser__container">
      <div className="row">
        <div className="col-md-6 link-color mt-3 mb-3">
          <Link
            to="add-serviceuser"
            className="link-color navigation__link"
            style={{ marginLeft: '-1rem' }}
          >
            Add Service User
          </Link>
        </div>
      </div>
      {itemsToRender}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchServiceUsers: () => dispatch(fetchServiceUsers()),
  reMount: () => dispatch(reMount()),
});

const mapStateToProps = (state) => ({
  loading: state.serviceUsers.loading,
  serviceUsers: state.serviceUsers.serviceUsers,
  hasErrors: state.serviceUsers.hasErrors,
  reMountComponent: state.remount.reload,
});
// Connect Redux to React
export default connect(mapStateToProps, mapDispatchToProps)(ServiceUsers);
