import React from 'react';
import useTheme from 'misc/hooks/useTheme';

import SvgIcon from '../SvgIcon';

const Info = ({
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
        d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z'
        fill={actualColor}
      />
    </SvgIcon>
  );
};

export default Info;