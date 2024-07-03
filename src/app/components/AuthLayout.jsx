import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../actions/user';
import useChangePage from 'misc/hooks/useChangePage';
import pagesURLs from 'constants/pagesURLs';
import { login as loginPage }  from 'constants/pages';
import Loading from 'components/Loading';

const AuthLayout = () => {
  const dispatch = useDispatch();
  const { fetchUser } = userActions;
  const user = useSelector(({ user }) => user);

  useEffect(() => {
    fetchUser(dispatch);
  }, []);

  return (
    <>
      {user.isAuthorized
        ? <Outlet/>
        : <Loading />
      }
    </>
  );
};

export default AuthLayout;