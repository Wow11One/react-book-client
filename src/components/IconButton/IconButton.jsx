import React from 'react';
import IconButtonMUI from '@mui/material/IconButton';
import useTheme from 'misc/hooks/useTheme';

const colorVariants = {
  header: 'header',
  primary: 'primary',
  secondary: 'secondary',
};

const IconButton = ({
  children,
  colorVariant = colorVariants.secondary,
  disabled = false,
  disableHoverSpace = false,
  onClick,
  onPress,
  onRelease,
  hidden,
}) => {
  const { theme } = useTheme();
  return (
    <IconButtonMUI
      disabled={disabled}
      onClick={onClick}
      onMouseDown={onPress}
      onMouseUp={onRelease}
      sx={{
        '&.MuiIconButton-root': {
          '&.Mui-disabled': {
            background: theme.button.color[colorVariant].backgroundDisabled,
          },
          '&:hover': {
            background: theme.button.color[colorVariant].backgroundHovered,
          },
          visibility: hidden ? 'hidden' : 'visible',
          background: theme.button.color[colorVariant].background,
          color: theme.button.color[colorVariant].text,
          padding: `0px`,
          opacity: disabled && '0.4',
        },
      }}
    >
      {children}
    </IconButtonMUI>
  );
};

export default IconButton;
