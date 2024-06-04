import React, { useState } from 'react';
import Card from '../../../components/Card';
import CardMedia from '../../../components/CardMedia';
import CardContent from '../../../components/CardContent';
import Typography from '../../../components/Typography';
import Button from '../../../components/Button';
import CardActions from '../../../components/CardActions';
import DeleteButton from './DeleteButton';
import { createUseStyles } from 'react-jss';
import { Grid } from '@mui/material';

const getClasses = createUseStyles(() => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '0.6rem',
  },
}));

const BookListItem = () => {
  const [state, setState] = useState({ showDeleteButton: false });
  const styleClasses = getClasses();

  return (
    <Grid
      container
      justifyContent={'start'}
      spacing={6}
    >
      <Grid item>
        <Card
          disablePaddings={true}
          onMouseOver={() => setState({ ...state, showDeleteButton: true })}
          onMouseOut={() => setState({ ...state, showDeleteButton: false })}
        >
          <CardMedia
            alt='book image'
            url='https://res.cloudinary.com/dbkgbcqcf/image/upload/v1716979595/books/wh8zqpboqbw2n1lcvw7r.jpg'
          />
          <CardContent>
            <Typography
              variant='title'
              capitalize='true'
            >
              Ja pobeda i Berlin
            </Typography>
            <Typography
              variant="default"
              color="text.secondary"
            >
              Genre: dystopia
            </Typography>
            <Typography
              variant="default"
              color="text.secondary"
            >
              Author: Taras Shevchenko
            </Typography>
          </CardContent>
          <CardActions>
            <div>
              <Button colorVariant="secondary">Learn more</Button>
            </div>
            {state.showDeleteButton &&
              <div>
                <DeleteButton>Delete</DeleteButton>
              </div>
            }
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card
          disablePaddings={true}
          onMouseOver={() => setState({ ...state, showDeleteButton: true })}
          onMouseOut={() => setState({ ...state, showDeleteButton: false })}
        >
          <CardMedia
            alt="book image"
            url="https://res.cloudinary.com/dbkgbcqcf/image/upload/v1716979595/books/wh8zqpboqbw2n1lcvw7r.jpg"
          />
          <CardContent>
            <Typography
              variant="title"
              capitalize="true"
            >
              Ja pobeda i Berlin
            </Typography>
            <Typography
              variant="default"
              color="text.secondary"
            >
              Genre: dystopia
            </Typography>
            <Typography
              variant="default"
              color="text.secondary"
            >
              Author: Taras Shevchenko
            </Typography>
          </CardContent>
          <CardActions>
            <div>
              <Button colorVariant="secondary">Learn more</Button>
            </div>
            {state.showDeleteButton &&
              <div>
                <DeleteButton>Delete</DeleteButton>
              </div>
            }
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card
          disablePaddings={true}
          onMouseOver={() => setState({ ...state, showDeleteButton: true })}
          onMouseOut={() => setState({ ...state, showDeleteButton: false })}
        >
          <CardMedia
            alt="book image"
            url="https://res.cloudinary.com/dbkgbcqcf/image/upload/v1716979595/books/wh8zqpboqbw2n1lcvw7r.jpg"
          />
          <CardContent>
            <Typography
              variant="title"
              capitalize="true"
            >
              Ja pobeda i Berlin
            </Typography>
            <Typography
              variant="default"
              color="text.secondary"
            >
              Genre: dystopia
            </Typography>
            <Typography
              variant="default"
              color="text.secondary"
            >
              Author: Taras Shevchenko
            </Typography>
          </CardContent>
          <CardActions>
            <div>
              <Button colorVariant="secondary">Learn more</Button>
            </div>
            {state.showDeleteButton &&
              <div>
                <DeleteButton>Delete</DeleteButton>
              </div>
            }
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card
          disablePaddings={true}
          onMouseOver={() => setState({ ...state, showDeleteButton: true })}
          onMouseOut={() => setState({ ...state, showDeleteButton: false })}
        >
          <CardMedia
            alt="book image"
            url="https://res.cloudinary.com/dbkgbcqcf/image/upload/v1716979595/books/wh8zqpboqbw2n1lcvw7r.jpg"
          />
          <CardContent>
            <Typography
              variant="title"
              capitalize="true"
            >
              Ja pobeda i Berlin
            </Typography>
            <Typography
              variant="default"
              color="text.secondary"
            >
              Genre: dystopia
            </Typography>
            <Typography
              variant="default"
              color="text.secondary"
            >
              Author: Taras Shevchenko
            </Typography>
          </CardContent>
          <CardActions>
            <div>
              <Button colorVariant="secondary">Learn more</Button>
            </div>
            {state.showDeleteButton &&
              <div>
                <DeleteButton>Delete</DeleteButton>
              </div>
            }
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card
          disablePaddings={true}
          onMouseOver={() => setState({ ...state, showDeleteButton: true })}
          onMouseOut={() => setState({ ...state, showDeleteButton: false })}
        >
          <CardMedia
            alt="book image"
            url="https://res.cloudinary.com/dbkgbcqcf/image/upload/v1716979595/books/wh8zqpboqbw2n1lcvw7r.jpg"
          />
          <CardContent>
            <Typography
              variant="title"
              capitalize="true"
            >
              Ja pobeda i Berlin
            </Typography>
            <Typography
              variant="default"
              color="text.secondary"
            >
              Genre: dystopia
            </Typography>
            <Typography
              variant="default"
              color="text.secondary"
            >
              Author: Taras Shevchenko
            </Typography>
          </CardContent>
          <CardActions>
            <div>
              <Button colorVariant="secondary">Learn more</Button>
            </div>
            {state.showDeleteButton &&
              <div>
                <DeleteButton>Delete</DeleteButton>
              </div>
            }
          </CardActions>
        </Card>
      </Grid>
      <Grid item>
        <Card
          disablePaddings={true}
          onMouseOver={() => setState({ ...state, showDeleteButton: true })}
          onMouseOut={() => setState({ ...state, showDeleteButton: false })}
        >
          <CardMedia
            alt="book image"
            url="https://res.cloudinary.com/dbkgbcqcf/image/upload/v1716979595/books/wh8zqpboqbw2n1lcvw7r.jpg"
          />
          <CardContent>
            <Typography
              variant="title"
              capitalize="true"
            >
              Ja pobeda i Berlin
            </Typography>
            <Typography
              variant="default"
              color="text.secondary"
            >
              Genre: dystopia
            </Typography>
            <Typography
              variant="default"
              color="text.secondary"
            >
              Author: Taras Shevchenko
            </Typography>
          </CardContent>
          <CardActions>
            <div>
              <Button colorVariant="secondary">Learn more</Button>
            </div>
            {state.showDeleteButton &&
              <div>
                <DeleteButton>Delete</DeleteButton>
              </div>
            }
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default BookListItem;