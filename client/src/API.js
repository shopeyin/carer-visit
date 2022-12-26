import axios from 'axios';

export default axios.create({
  baseURL: 'https://carer-visit.herokuapp.com/api/v1/',
  headers: {
    'Content-type': 'application/json',
  },
});

// https://carer-visit.herokuapp.com/api/v1/
