import { createUseStyles } from 'react-jss';
import React from 'react';
import useTheme from 'misc/hooks/useTheme';

const getClasses = createUseStyles(theme => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    gap: `${theme.spacing(1)}px`,
    justifyContent: 'space-between',
    padding: `${theme.spacing(0)}px ${theme.spacing(2)}px`,
    paddingBottom: '0.7rem'
  },
}));

function CardActions({
  children,
}) {
  const { theme } = useTheme();
  const classes = getClasses({ theme });
  return (
    <div className={classes.container}>
      {children}
    </div>
  );
}

export default CardActions;
