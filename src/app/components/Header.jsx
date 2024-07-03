import React, { useMemo, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import Button from 'components/Button';
import Hover from 'components/Hover';
import IconButton from 'components/IconButton';
import IconGlobus from 'components/icons/Globus';
import IconLogout from 'components/icons/Logout';
import Link from 'components/Link';
import Logo from 'components/Logo';
import Typography from 'components/Typography';
import useChangePage from 'misc/hooks/useChangePage';
import useCurrentPage from 'misc/hooks/useCurrentPage';
import useIsMobile from 'misc/hooks/useIsMobile';
import useLocationSearch from 'misc/hooks/useLocationSearch';
import useTheme from 'misc/hooks/useTheme';

import * as pages from 'constants/pages';
import languages from 'misc/constants/languages';
import pagesURLs from 'constants/pagesURLs';

import LeftNavBar from './LeftNavBar';

const getClasses = createUseStyles((theme) => ({
  container: {
    color: theme.header.color.text.primary,
    background: theme.header.color.background,
    boxShadow: '0px 0px 6px 0px',
    display: 'flex',
    height: `${theme.header.height}px`,
    zIndex: 1300,
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    width: '100%',
  },
  hover: {
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
  },
  selectedLang: {
    display: 'flex',
    width: 'fit-content',
  },
  toolBarContainerLeft: {
    alignItems: 'center',
    display: 'flex',
    gap: `${theme.spacing(1)}px`,
  },
  toolBarContainerRight: {
    alignItems: 'center',
    display: 'flex',
    gap: `${theme.spacing(1)}px`,
    justifyContent: 'flex-end',
  },
  userNameMobile: {
    maxWidth: '110px',
  },
}));

const interfaceLagsTranslate = {
  [languages.en]: 'English',
  [languages.ua]: 'Українська',
};

const interfaceLagsTranslateShort = {
  [languages.en]: 'Eng',
  [languages.ua]: 'Укр',
};

const orderedInterfaceLangs = [
  languages.ua,
  languages.en,
];

const rightPanelItemTypes = {
  LANGUAGE: 'language',
  LOGIN: 'login',
  SEPARATOR: 'separator',
  USER_NAME: 'userName',
};

function Header({
  onLogout,
}) {
  const { theme } = useTheme();
  const { formatMessage } = useIntl();
  const changePage = useChangePage();
  const classes = getClasses({ theme });
  const currentPage = useCurrentPage();
  const isMobile = useIsMobile();
  const langsMenuRef = useRef(null);
  const locationSearch = useLocationSearch();
  const user = useSelector(({ user: reducerUser }) => reducerUser);
  const userMenuRef = useRef(null);

  const [state, setState] = useState({
    isLangsMenuOpened: false,
    isUserMenuOpened: false,
  });

  const userName = user.firstName || user.login;

  const actualOrderedRightPanelItemTypes = useMemo(() => {
    const result = [];
    if (user.isAuthorized) {
      result.push(rightPanelItemTypes.USER_NAME);
    } else if (
      !user.isFetchingUser
      && currentPage !== pages.login
    ) {
      result.push(rightPanelItemTypes.LOGIN);
    }
    result.push(rightPanelItemTypes.LANGUAGE);
    return result.reduce((acc, item, index) => {
      if (index > 0) {
        acc.push(rightPanelItemTypes.SEPARATOR);
      }
      acc.push(item);
      return acc;
    }, []);
  }, [user, currentPage]);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.toolBarContainerLeft}>
          <LeftNavBar />
          <Link
            to={{
              pathname: `${pagesURLs[pages.defaultPage]}`,
            }}
          >
            <Hover
              light
              selected={currentPage === pages.defaultPage}
            >
              <div className={classes.hover}>
                <Logo compact={isMobile} />
              </div>
            </Hover>
          </Link>
        </div>
        <div className={classes.toolBarContainerRight}>
          <>
            {user.isAuthorized && (
              <>
                <Typography
                  color="inherit"
                  variant="subtitle"
                >
                    Hello, {user.fullName}!
                </Typography>
                <Typography
                  color="paper"
                  variant="subtitle"
                >
                  <strong>
                    |
                  </strong>
                </Typography>
                <IconButton
                  colorVariant="header"
                  variant="text"
                >
                  <Link
                    href="/login"
                  >
                      <IconLogout size={24}/>
                  </Link>
                </IconButton>
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
}

export default Header;
