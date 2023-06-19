import React, { useEffect, useState } from 'react';
import apiServiceJWT from './../ApiServiceJWT';
const initialState = {
  firstName: '',
  lastName: '',
};

const Profile = () => {
  const [state, setState] = useState(initialState);

  const firstName = state.firstName || 'Missing';
  const lastName = state.lastName || 'No.';

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const getProfile = async (accessToken) => {
      const userInfo = await apiServiceJWT.profile(accessToken);
      if (userInfo) {
        const { firstName, lastName } = userInfo;
        setState((prevState) => {
          return {
            ...prevState,
            firstName,
            lastName,
          };
        });
      } else {
        console.log('No user info found 😞');
      }
    };
    getProfile(accessToken);
  }, []);

  return (
    <section>
      <h2>My Profile</h2>
      <h3>
        Welcome back, {firstName} {lastName}! Everything is fine.
      </h3>
    </section>
  );
};

export default Profile;
