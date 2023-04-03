import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';

import Visit from './Visit';

import { fetchVisit } from '../utils';

function CarerVisits({ currentUser }) {
  const [serviceUsersVisit, setServiceUsersVisit] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    let mounted = true;

    let visitDate = {
      dateOfVisit:
        format(new Date(selectedDate), 'yyyy-MM-dd') + 'T00:00:00.000Z',
    };
    const fetchVisitData = async () => {
      try {
        let visit = await fetchVisit(currentUser._id, visitDate);

        if (visit.length === 0) {
          setServiceUsersVisit([]);
          return;
        }
        if (mounted) {
          localStorage.setItem('visitId', visit[0]._id);

          setServiceUsersVisit(visit[0].serviceusersToVisit);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchVisitData();

    return () => {
      mounted = false;
    };
  }, [currentUser, selectedDate]);

  let itemsToRender;

  if (serviceUsersVisit) {
    itemsToRender = serviceUsersVisit.map((serviceUser) => {
      return (
        <div
          className="row mt-3 pl-4 pr-4 d-flex  justify-content-center"
          key={serviceUser._id}
        >
          <div className="col-8 col-sm-5 col-md-4 col-lg-3">
            <Link to={`activities/${serviceUser._id}`} className="link-color">
              <div className="card ">
                <div className="card-body ">
                  <h4 className="card-title link-color"> {serviceUser.name}</h4>

                  <h6 className="card-text link-color ">
                    {serviceUser.address}
                  </h6>
                </div>
              </div>
            </Link>{' '}
          </div>
        </div>
      );
    });
  }
  return (
    <div className="container-fluid p-0 ">
      <div className="row  d-flex  justify-content-center mt-4 ">
        <div className="col-8 col-sm-4  text-center">
          {' '}
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
            showYearDropdown
            scrollableMonthYearDropdown
          />
        </div>
      </div>
      <Visit
        serviceUsersVisit={serviceUsersVisit}
        itemsToRender={itemsToRender}
        selectedDate={selectedDate}
      />
    </div>
  );
}

export default CarerVisits;
