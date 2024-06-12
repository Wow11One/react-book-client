import React from 'react';
import useTheme from 'misc/hooks/useTheme';

import SvgIcon from '../SvgIcon';

const Back = ({
  color = 'default', // default | header | error | success | warning | info | <string>
  size = 32,
}) => {
  const { theme } = useTheme();
  const actualColor = theme.icon.color[color] || color;
  return (
    <SvgIcon
      style={{
        height: `${size}px`,
        width: `${size}px`,
      }}
      viewBox='0 0 24 24'
    >
      <path
        d='M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z'
        fill={actualColor}
      />
    </SvgIcon>
  );
};

export default Back;