import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/user/user-action';

import { connect, useSelector } from 'react-redux';
import './signin.style.scss';

function SignIn({ login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tokenLoaded, setTokenloaded] = useState(false);

  let errorState = useSelector((state) => state.user.error);

  let navigate = useNavigate();

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

    await login(data);
    navigate('/');
  };

  if (tokenLoaded) {
    return (
      <div className="container">
        <div className="row signin-container d-flex justify-content-center align-items-center">
          <div className="col-12 col-sm-5">
            <form onSubmit={handleSubmit}>
              {' '}
              <p style={{ color: 'red' }}>
                {' '}
                {errorState ? 'Invalid login details' : ''}
              </p>
              <div className="form-group">
                <label htmlFor="exampleInputTitle">Email</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  aria-describedby="TitleHelp"
                />
                <label htmlFor="exampleInputTitle">Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  aria-describedby="TitleHelp"
                />

                <button type="submit" className="btn btn-primary mt-2">
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
const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
});

export default connect(null, mapDispatchToProps)(SignIn);
