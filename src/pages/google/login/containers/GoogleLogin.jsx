import { createUseStyles } from 'react-jss';
import { useIntl } from 'react-intl';
import useTheme from 'misc/hooks/useTheme';
import Button from 'components/Button';
import Card from 'components/Card';
import CardActions from 'components/CardActions';
import CardContent from 'components/CardContent';
import CardTitle from 'components/CardTitle';
import Dialog from 'components/Dialog';
import IconButton from 'components/IconButton';
import IconClose from 'components/icons/Close';
import IconVisibilityOff from 'components/icons/VisibilityOff';
import IconVisibilityOn from 'components/icons/VisibilityOn';
import md5 from 'md5';
import React, { useEffect, useState } from 'react';
import TextField from 'components/TextField';
import Typography from 'components/Typography';
import GoogleIcon from 'components/icons/Google';
import { googleFetchSignIn } from 'app/actions/user';

import * as errorCodes from '../constants/errorCodes';

const getClasses = createUseStyles((theme) => ({
  buttons: {
    display: 'flex',
    gap: `${theme.spacing(1)}px`,
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '6rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: `${theme.spacing(2)}px`,
    width: '300px',
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: `${theme.spacing(2)}px`,
  },
}));

function GoogleLogin() {
  const { formatMessage } = useIntl();
  const { theme } = useTheme();
  const classes = getClasses({ theme });

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Typography
          align={'center'}
          variant={'title'}
        >
          Authorization
        </Typography>
        <Button
          onClick={googleFetchSignIn}
        >
          <GoogleIcon /> Sign in with Google
        </Button>
      </div>
    </div>
  );
}

export default GoogleLogin;
