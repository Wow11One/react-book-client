import React from 'react';
import InputLabelMUI from '@mui/material/InputLabel';

const InputLabel = ({
  children,
  id,
}) => {
  return (
    <InputLabelMUI
      id={id}
      sx={{
        textAlign: 'center',
      }}
    >
      {children}
    </InputLabelMUI>
  );
};

export default InputLabel;