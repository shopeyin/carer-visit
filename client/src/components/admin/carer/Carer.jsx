import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCarers } from '../../../redux/carer/carer-action';
import { reMount } from '../../../../src/redux/remount/remount-action';
import axios from 'axios';
import './carer.style.scss';
import CarerList from './CarerList';

function Carer() {
  const carers = useSelector((state) => state.carers.carers);
  const remount = useSelector((state) => state.remount.reload);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCarers());
  }, [dispatch, remount]);

  const handleDeleteCarer = async (id) => {
    try {
      await axios.delete(`/api/v1/carers/${id}`);
      dispatch(reMount());
    } catch (error) {
      console.log(error);
    }

    return;
  };

  return <CarerList carers={carers} handleDeleteCarer={handleDeleteCarer} />;
}

export default Carer;
