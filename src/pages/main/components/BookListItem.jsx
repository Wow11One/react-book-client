import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CardMedia from 'components/CardMedia';
import CardContent from 'components/CardContent';
import Typography from 'components/Typography';
import CardActions from 'components/CardActions';
import Button from 'components/Button';
import DeleteButton from './DeleteButton';
import Card from 'components/Card';
import { showDeleteModal } from '../actions/book';
import pagesURLs from 'constants/pagesURLs';
import * as pages from 'constants/pages';
import formType from '../../bookForm/constants/formType';
import { useSearchParams } from 'react-router-dom';
import useChangePage from '../../../misc/hooks/useChangePage';

const BookListItem = ({ book }) => {
  const [state, setState] = useState({ showDeleteButton: false, selectedId: NaN });
  const dispatch = useDispatch();
  const changePage = useChangePage();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    id,
    image,
    title,
    genre,
    author,
  } = book;

  return (
    <Card
      key={id}
      disablePaddings={true}
      onMouseOver={() => setState({ ...state, showDeleteButton: true, selectedId: id })}
      onMouseOut={() => setState({ ...state, showDeleteButton: false, selectedId: NaN })}
    >
      <CardMedia
        alt='book image'
        url={image}
      />
      <CardContent>
        <Typography
          variant='title'
          capitalize='true'
        >
          {title}
        </Typography>
        <Typography
          variant='default'
          color='text.secondary'
        >
          Genre: {genre.name}
        </Typography>
        <Typography
          variant='default'
          color='text.secondary'
        >
          Author: {author.name}
        </Typography>
      </CardContent>
      <CardActions>
        <div>
          <Button
            colorVariant='secondary'
            onClick={() => {
              const page = parseInt(searchParams.get('page')) || 1;
              const authorId = parseInt(searchParams.get('authorId')) || null;
              const genreId = parseInt(searchParams.get('genreId')) || null;
              changePage({
                pathname: pagesURLs[pages.bookFormPage],
                locationSearch: {
                  ...(page && { page }),
                  ...(authorId && { authorId }),
                  ...(genreId && { genreId }),
                  type: formType.UPDATE,
                  id,
                },
              });
            }}
          >
            Learn more
          </Button>
        </div>
        {state.showDeleteButton && state.selectedId === id &&
          <div>
            <DeleteButton
              onClick={() => showDeleteModal(dispatch, true, id)}
            >
              Delete
            </DeleteButton>
          </div>
        }
      </CardActions>
    </Card>
  );
};

export default BookListItem;