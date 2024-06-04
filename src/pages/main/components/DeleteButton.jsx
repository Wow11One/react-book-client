import React from 'react';
import IconButton from '../../../components/IconButton';
import TrashCanIcon from '../../../components/icons/TrashCan';

const DeleteButton = () => {
    return (
        <div>
            <IconButton>
                <TrashCanIcon/>
            </IconButton>
        </div>
    );
};

export default DeleteButton;