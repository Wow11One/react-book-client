import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import React from 'react';
import useTheme from 'misc/hooks/useTheme';

const getClasses = createUseStyles((theme) => ({
  bottomStub: {
    height: '16px',
  },
  container: {
    background: theme.pageContainer.color.background,
    display: 'flex',
    minHeight: '100vh',
    overflowY: 'auto',
  },
  content: {
    background: theme.pageContainer.content.color.background,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: theme.pageContainer.content.width,
    width: '100%',
    minHeight: '100vh',
  },
  contentContainer: {
    display: 'flex',
    overflowX: 'auto',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100vh',
  },
  fullWidth: {
    maxWidth: '100% !important',
  },
  innerContent: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
  },
  sideBarStub: {
    minWidth: `${theme.sideBar.width}px`,
    width: '20%',
  },
}));

function PageContainer({
  children,
  fullWidth = false,
}) {
  const { theme } = useTheme();
  const classes = getClasses({ theme });
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div
          className={classNames(
            classes.content,
            fullWidth && classes.fullWidth
          )}
        >
          <div className={classes.innerContent}>
            {children}
            <div className={classes.bottomStub} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContainer;
