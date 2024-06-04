import React from 'react';
import CardMediaMUI from '@mui/material/CardMedia';
const CardMedia = ({
    height,
    url,
    alt
}) => {
    return (
        <CardMediaMUI
            component='img'
            height='150'
            image={url}
            alt={alt}
            xs={{
                maxHeight: '100%'
            }}
        />
    );
};

export default CardMedia;