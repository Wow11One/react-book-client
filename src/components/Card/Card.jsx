import React from 'react';
import CardMUI from '@mui/material/Card';
import useTheme from 'misc/hooks/useTheme';

const variants = {
  paper: 'paper',
  edit: 'edit',
  error: 'error',
  info: 'info',
  success: 'success',
  warning: 'warning',
};

function Card({
  customBackground,
  children,
  disablePaddings = false,
  variant = variants.paper,
  onMouseOver,
  onMouseOut
}) {
  const { theme } = useTheme();
  return (
    <CardMUI
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      sx={{
        background: customBackground || theme.card.color.background[variant],
        borderRadius: '0px',
        display: 'flex',
        flexDirection: 'column',
        gap: `${theme.spacing(2)}px`,
        padding: disablePaddings
          ? 'none'
          : `20px`,
        transition: 'all 0.2s ease-out',
        maxWidth: '250px',
        maxHeight: '300px'
      }}
    >
      {children}
    </CardMUI>
  );
}

export default Card;
