import React from 'react';
import useTheme from 'misc/hooks/useTheme';
import SvgIcon from '../SvgIcon';

const Logout = ({
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
        d='m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z'
        fill={actualColor}
      />
    </SvgIcon>
  );
};

export default Logout;
