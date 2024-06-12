import React from 'react';
import FormHelperTextMui from '@mui/material/FormHelperText';

const FormHelperText = ({
  children,
}) => {
  return (
    <FormHelperTextMui
      error
    >
      {children}
    </FormHelperTextMui>
  );
};

export default FormHelperText;