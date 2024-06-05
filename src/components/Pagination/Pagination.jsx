import React from 'react';
import PaginationMUI from '@mui/material/Pagination';

const Pagination = ({
  count,
  page,
  onChange,
  color,
}) => {

  return (
    <PaginationMUI
      count={count}
      page={page}
      onChange={onChange}
      color={color}
    />
  );
};

export default Pagination;