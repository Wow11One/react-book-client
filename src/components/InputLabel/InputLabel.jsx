import React from 'react';
import InputLabelMUI from '@mui/material/InputLabel';

const InputLabel = ({
  children,
}) => {
  return (
    <InputLabelMUI
      sx={{
        textAlign: 'center',
      }}
    >
      {children}
    </InputLabelMUI>
  );
};

export default InputLabel;