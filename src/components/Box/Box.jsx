import React from 'react';
import BoxMUI from '@mui/material/Box';

const Box = ({
  display='grid',
  gridTemplateColumns='repeat(12, 1fr)',
  gap=3,
  children,
  gridColumn,
}) => {
  return (
    <BoxMUI
      display={display}
      gridTemplateColumns={gridTemplateColumns}
      gap={gap}
      gridColumn={gridColumn}
    >
      {children}
    </BoxMUI>
  );
};

export default Box;