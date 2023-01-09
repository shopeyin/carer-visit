import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/user/user-action';

import { useSelector, useDispatch } from 'react-redux';
import './signin.style.scss';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tokenLoaded, setTokenloaded] = useState(false);

  let errorState = useSelector((state) => state.user.error);

  let navigate = useNavigate();
  let dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('Authtoken')) {
      navigate('/');
    }
    setTokenloaded(true);
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };
    await dispatch(login(data));

    navigate('/');
  };

  if (tokenLoaded) {
    return (
      <div className="container-fluid signin__container">
        <div className="row signin__container-form">
          <div className="col-11 col-sm-6 col-md-6 m-3">
            <form onSubmit={handleSubmit}>
              <p className="error-msg">
                {' '}
                {errorState ? 'Invalid login details' : ''}
              </p>
              <div className="form-group text-color">
                <label htmlFor="exampleInputTitle form__label">Email</label>
                <input
                  type="email"
                  className="form-control form-control-lg  form__input "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  aria-describedby="TitleHelp"
                />
                <label htmlFor="exampleInputTitle form__label">Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg  form__input"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  aria-describedby="TitleHelp"
                />

                <button type="submit" className="btn btn-primary btn-lg mt-2 ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default SignIn;
