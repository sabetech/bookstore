import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button type="button" onClick={() => handleCheckStatus()}>Check Status</button>
      <p>
        Status:
        {' '}
        { status.status }
      </p>
    </>
  );
}

export default Categories;
