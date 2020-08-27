import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchUsers } from '../redux/user/userActions';
import { useEffect } from 'react';
function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return <div>Hello</div>;
}

export default Home;
