import React, {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route, Navigate,
} from 'react-router-dom';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { addAxiosInterceptors } from 'misc/requests';
import * as pages from 'constants/pages';
import AuthoritiesProvider from 'misc/providers/AuthoritiesProvider';
import Loading from 'components/Loading';
import GoogleLoginPage from 'pageProviders/GoogleLogin';
import Main from 'pageProviders/Main';
import BookForm from 'pageProviders/BookForm';
import PageContainer from 'pageProviders/components/PageContainer';
import pageURLs from 'constants/pagesURLs';
import SecretPage from 'pageProviders/Secret';
import ThemeProvider from 'misc/providers/ThemeProvider';
import UserProvider from 'misc/providers/UserProvider';

import actionsUser from '../actions/user';
import Header from '../components/Header';
import IntlProvider from '../components/IntlProvider';
import MissedPage from '../components/MissedPage';
import SearchParamsConfigurator from '../components/SearchParamsConfigurator';
import AuthLayout from '../components/AuthLayout';

function App() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    componentDidMount: false,
  });

  const {
    isFetchingUser,
  } = useSelector(({ user }) => user);

  useEffect(() => {
    addAxiosInterceptors({
      onSignOut: () => dispatch(actionsUser.fetchSignOut()),
    });
    setState({
      ...state,
      componentDidMount: true,
    });
  }, []);

  return (
    <UserProvider>
      <AuthoritiesProvider>
        <ThemeProvider>
          <BrowserRouter>
            <SearchParamsConfigurator />
            {/* This is needed to let first render passed for App's
              * configuration process will be finished (e.g. locationQuery
              * initializing) */}
            {state.componentDidMount && (
              <IntlProvider>
                <Header onLogout={() => dispatch(actionsUser.fetchSignOut())} />
                {isFetchingUser && (
                  <PageContainer>
                    <Loading />
                  </PageContainer>
                )}
                {!isFetchingUser && (
                  <Routes>
                    <Route>
                      {/* unauthorized routes */}
                      <Route
                        element={<GoogleLoginPage />}
                        path={`${pageURLs[pages.login]}`}
                      />
                    </Route>
                    <Route
                      element={<AuthLayout />}
                      path='/'
                    >
                      <Route
                        element={<SecretPage />}
                        path={`${pageURLs[pages.secretPage]}`}
                      />
                      <Route
                        element={<Navigate to={`${pageURLs[pages.bookPage]}`} />}
                        index
                      />
                      <Route
                        element={<Main />}
                        path={`${pageURLs[pages.bookPage]}`}
                      />
                      {/*
                    <Route
                      element={(
                        <LoginPage
                          errors={errors}
                          isFailedSignIn={isFailedSignIn}
                          isFailedSignUp={isFailedSignUp}
                          isFetchingSignIn={isFetchingSignIn}
                          isFetchingSignUp={isFetchingSignUp}
                          onSignIn={({
                            email,
                            login,
                            password,
                          }) => dispatch(actionsUser.fetchSignIn({
                            email,
                            login,
                            password,
                          }))}
                          onSignUp={({
                            email,
                            firstName,
                            lastName,
                            login,
                            password,
                          }) => dispatch(actionsUser.fetchSignUp({
                            email,
                            firstName,
                            lastName,
                            login,
                            password,
                          }))}
                        />
                      )}
                      path={`${pageURLs[pages.login]}`}
                    />
                    */}

                      <Route
                        element={<BookForm/>}
                        path={`${pageURLs[pages.bookPage]}/form`}
                      />
                      <Route
                        element={(
                          <Navigate to={`${pageURLs[pages.bookPage]}`} />
                        )}
                        path="*"
                      />
                    </Route>
                  </Routes>
                )}
              </IntlProvider>
            )}
          </BrowserRouter>
        </ThemeProvider>
      </AuthoritiesProvider>
    </UserProvider>
  );
}

export default App;
