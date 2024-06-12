import React from 'react';
import useTheme from 'misc/hooks/useTheme';

import SvgIcon from '../SvgIcon';

/* eslint-disable max-len */
const Pencil = ({
  color = 'default', // default | header | error | success | warning | info | <string>
  size = 28,
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
        d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.9959.9959 0
       0 0-1.41 0l-1.83 1.83 3.75
       3.75 1.83-1.83c.39-.39.39-1.02 0-1.41'
        fill={actualColor}
      />
    </SvgIcon>
  );
};

export default Pencil;