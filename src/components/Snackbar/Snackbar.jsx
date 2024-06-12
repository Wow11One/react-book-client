import React from 'react';
import SnackbarMUI from '@mui/material/Snackbar';
import IconButton from '../IconButton';
import CloseIcon from '../icons/Close';

const Snackbar = ({
  open,
  onClose,
  message,
  anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
}) => {
  const action =  (
      <IconButton
        onClick={onClose}
      >
        <CloseIcon
          color={'header'}
        />
      </IconButton>
    );

  return (
    <SnackbarMUI
      autoHideDuration={12000}
      open={open}
      message={message}
      color={'white'}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      action={action}
    />
  );
};

export default Snackbar;