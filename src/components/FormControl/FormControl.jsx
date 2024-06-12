import React from 'react';
import FormControlMUI from '@mui/material/FormControl';

const FormControl = ({
  children,
  error,
}) => {
  return (
    <FormControlMUI
      error={error}
    >
      {children}
    </FormControlMUI>
  );
};

export default FormControl;