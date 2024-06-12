import React from 'react';
import IconButton from '../../../components/IconButton';
import TrashCanIcon from '../../../components/icons/TrashCan';

const DeleteButton = ({
  onClick,
}) => {
    return (
        <div>
            <IconButton
              onClick={onClick}
            >
                <TrashCanIcon/>
            </IconButton>
        </div>
    );
};

export default DeleteButton;