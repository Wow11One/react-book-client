import { createUseStyles } from 'react-jss';
import React from 'react';
import IconHome from '../icons/Home';
import useTheme from 'misc/hooks/useTheme';

const getClasses = createUseStyles(theme => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    gap: `${theme.spacing(1)}px`,
  },
  label: {
    color: `${theme.header.color.text.primary}`,
    fontFamily: '"Noto Sans", "Helvetica", "Arial", sans-serif',
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 1.5,
  },
  labelCompactContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  labelCompactMain: {
    color: `${theme.header.color.text.primary}`,
    fontFamily: '"Noto Sans", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
  },
  labelCompactSub: {
    color: `${theme.header.color.text.primary}`,
    fontFamily: '"Noto Sans", "Helvetica", "Arial", sans-serif',
    fontSize: 12,
  },
}));

function Logo({
  compact = false,
}) {
  const { theme } = useTheme();
  const classes = getClasses({ theme });
  return (
    <div className={classes.container}>
      {!compact && (
        <IconHome color="header"/>
      )}
      {!compact && (
        <div className={classes.label}>
          <strong>
            Library
          </strong>
        </div>
      )}
      {compact && (
        <div className={classes.labelCompactContainer}>
          <div className={classes.labelCompactMain}>
            <strong>
              Library
            </strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default Logo;
