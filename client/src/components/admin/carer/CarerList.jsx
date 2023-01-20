import React from 'react';
import { Link } from 'react-router-dom';

function CarerList({ carers, handleDeleteCarer }) {
  let itemsToRender;
  if (carers && carers.length > 0) {
    itemsToRender = carers.map((carer) => {
      return (
        <div className="row" key={carer._id}>
          <div className="col-7 col-sm-5 col-md-3   m-1 carer__container-item">
            <Link to={`${carer._id}`} className="link-color">
              <div className="card" style={{ width: '100%' }}>
                <div className="card-body">
                  <h4 className="card-title text-center text-uppercase">
                    {' '}
                    {carer.name}
                  </h4>
                </div>
              </div>
            </Link>{' '}
          </div>
          <div className="col-3 col-sm-1 col-md-3 text-center p-4 trash-can">
            <i
              className="fa-solid fa-trash-can mt-2"
              onClick={() => {
                handleDeleteCarer(carer._id);
              }}
            ></i>
          </div>
        </div>
      );
    });
  } else if (carers && carers.length === 0) {
    itemsToRender = 'No carer';
  } else {
    itemsToRender = 'Loading...';
  }
  return (
    <div className="carer__container">
      <div className="row">
        <div className="col-11 col-sm-5 m-3 ">
          <Link to="add-carer" className="link-color navigation__link">
            Add Carer
          </Link>
        </div>
      </div>
      {itemsToRender}
    </div>
  );
}

export default CarerList;
