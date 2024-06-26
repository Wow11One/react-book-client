import React from 'react';
import SvgIcon from '../SvgIcon';

const TrashCan = ({size = 32}) => {
    const actualColor = 'error';
    return (
        <SvgIcon
            style={{
                height: `${size}px`,
                width: `${size}px`,
            }}
            viewBox="0 0 24 24"
        >
            <path
                d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z'
                color='red'
            />
        </SvgIcon>
    );
};

export default TrashCan;
