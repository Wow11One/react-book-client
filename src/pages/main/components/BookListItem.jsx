import React, { useState } from 'react';
import CardMedia from 'components/CardMedia';
import CardContent from 'components/CardContent';
import Typography from 'components/Typography';
import CardActions from 'components/CardActions';
import Button from 'components/Button';
import DeleteButton from './DeleteButton';
import Card from 'components/Card';

const BookListItem = ({
  id,
  image,
  title,
  genre,
  author,
}) => {
  const [state, setState] = useState({ showDeleteButton: false, selectedId: NaN });

  return (
    <Card
      key={id}
      disablePaddings={true}
      onMouseOver={() => setState({ ...state, showDeleteButton: true, selectedKey: 1 })}
      onMouseOut={() => setState({ ...state, showDeleteButton: false, selectedKey: NaN })}
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
          <Button colorVariant='secondary'>Learn more</Button>
        </div>
        {state.showDeleteButton && state.selectedId === id &&
          <div>
            <DeleteButton>Delete</DeleteButton>
          </div>
        }
      </CardActions>
    </Card>
  );
};

export default BookListItem;