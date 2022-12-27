import axios from 'axios';

export default axios.create({
  baseURL: 'https://carer-visit.herokuapp.com/api/v1/',
});

// https://carer-visit.herokuapp.com/api/v1/
