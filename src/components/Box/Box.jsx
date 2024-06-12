import React from 'react';
import BoxMUI from '@mui/material/Box';

const Box = ({
  display='grid',
  gridTemplateColumns='repeat(3, 1fr)',
  gap=3,
  children,
  gridColumn,
  alignItems,
  justifyContent,
}) => {
  return (
    <BoxMUI
      display={display}
      gridTemplateColumns={gridTemplateColumns}
      gap={gap}
      gridColumn={gridColumn}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {children}
    </BoxMUI>
  );
};

export default Box;