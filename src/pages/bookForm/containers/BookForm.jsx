import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import TextField from 'components/TextField';
import Typography from 'components/Typography';
import Select from 'components/Select';
import MenuItem from 'components/MenuItem';
import FormHelperText from 'components/FormHelperText';
import FormControl from 'components/FormControl';
import InputLabel from 'components/InputLabel';
import Button from 'components/Button';
import IconButton from 'components/IconButton';
import BackIcon from 'components/icons/Back';
import PencilIcon from 'components/icons/Pencil';
import InfoIcon from 'components/icons/Info';
import useChangePage from 'misc/hooks/useChangePage';
import pagesURLs from 'constants/pagesURLs';
import * as pages from 'constants/pages';
import formType from '../constants/formType';
import { changeBook, fetchBook, saveBook } from '../actions/book';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthors } from '../actions/author';
import { fetchGenres } from '../actions/genre';
import formValidations from '../validations/formValidations';
import Snackbar from 'components/Snackbar';

const getStyles = createUseStyles({
  formContainer: {
    margin: 30,
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  formInnerContainer: {
    marginTop: 10,
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    border: 'none',
  },

  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '30px',
  },

  buttonContainer: {
    width: '130px',
  },

  cancelImageButtonContainer: {
    marginTop: '10px',
  },

  submitButtonsContainer: {
    display: 'flex',
    justifyContent: 'end',
    gap: '10px',
  },

  navigationContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
});

const BookForm = () => {
  const styleClasses = getStyles();
  const changePage = useChangePage();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const {
    book,
    genre,
    author
  } = useSelector(({ book, genre, author }) => ({ book, genre, author }));
  const imageDefaultText = 'No image uploaded. (The default or previous one will be set)';
  const typeParameter = searchParams.get('type') || formType.INFO;
  const idParameter = parseInt(searchParams.get('id')) || null;
  const initFormState = {
    title: '',
    publicationHouse: '',
    yearPublished: '',
    circulation: '',
    pageAmount: '',
    authorId: '',
    genreId: '',
    image: null,
    imageText: imageDefaultText,
  };
  const initErrorState = {
    titleError: '',
    publicationHouseError: '',
    yearPublishedError: '',
    circulationError: '',
    pageAmountError: '',
    authorIdError: '',
    genreIdError: '',
    imageError: '',
    externalError: '',
  };

  const [state, setState] = useState({
    ...initFormState,
    bookListFilters: {},
    formType: formType.CREATE,
    snackbarText: '',
    showSnackBar: false,
  });

  // input errors
  const [errors, setErrors] = useState({
    ...initErrorState,
  });

  // when user presses a back button, then filters are going to be restored
  // not so sure about this logic, it could be improved
  const saveBookListParamsToState = () => {
    const page = parseInt(searchParams.get('page')) || 1;
    const authorId = parseInt(searchParams.get('authorId')) || null;
    const genreId = parseInt(searchParams.get('genreId')) || null;

    searchParams.delete('page');
    searchParams.delete('authorId');
    searchParams.delete('genreId');
    setSearchParams(searchParams);

    return {
      ...(page && { page }),
      ...(authorId && { authorId }),
      ...(genreId && { genreId }),
    };
  };

  const definePageType = (typeParameter) => {
    const type = 'type';
    let resTypeParameter = typeParameter;

    if (![formType.INFO, formType.UPDATE, formType.CREATE].includes(resTypeParameter)) {
      resTypeParameter = formType.INFO; // type by default
      searchParams.set(type, resTypeParameter);
      setSearchParams(searchParams);
    }

    return resTypeParameter;
  };

  const backToBookListPage = () => changePage({
    pathname: `${pagesURLs[pages.bookPage]}`,
    locationSearch: state.bookListFilters,
  });

  const mapReduxBookToReactState = (book, bookListFilters, formType) => {
    setState({
      ...state,
      bookListFilters,
      formType,
      title: book.title,
      publicationHouse: book.publicationHouse,
      yearPublished: book.yearPublished,
      circulation: book.circulation,
      pageAmount: book.pageAmount,
      authorId: book.authorId,
      genreId: book.genreId,
    });
  };

  const validate = () => {
    const formErrors = {};

    if (formValidations.stringValueValidation(state.title)) {
      formErrors.titleError = 'title should be more than 3 symbols!';
    }
    if (formValidations.stringValueValidation(state.publicationHouse)) {
      formErrors.publicationHouseError = 'publication house should be more than 3 symbols!';
    }
    if (formValidations.minNumberValueConstraint(state.yearPublished, 1600)) {
      formErrors.yearPublishedError = 'year published should be more than 1600!';
    }
    if (formValidations.minNumberValueConstraint(state.circulation, 100)) {
      formErrors.circulationError = 'circulation should be more than 100!';
    }
    if (formValidations.minNumberValueConstraint(state.pageAmount, 10)) {
      formErrors.pageAmountError = 'page amount should be more than 10!';
    }
    if (formValidations.foreignKeyEmpty(state.genreId)) {
      formErrors.genreIdError = 'each book should have genre!';
    }
    if (formValidations.foreignKeyEmpty(state.authorId)) {
      console.log(state.authorId, 'author', formValidations.foreignKeyEmpty(0))
      formErrors.authorIdError = 'each book should have author!';
    }

    return formErrors;
  };

  const createFormData = () => {
    const formData = new FormData();
    if (formType.UPDATE) {
      formData.set('id', idParameter);
    }
    if (state.image) {
      formData.set('image', state.image);
    }
    formData.set('title', state.title);
    formData.set('publicationHouse', state.publicationHouse);
    formData.set('yearPublished', state.yearPublished);
    formData.set('circulation', state.circulation);
    formData.set('pageAmount', state.pageAmount);
    formData.set('authorId', state.authorId);
    formData.set('genreId', state.genreId);

    return formData;
  };

  const showSnackBar = (showSnackBar, snackbarText) => {
    setState({
      ...state,
      showSnackBar,
      snackbarText,
    });
  };

  const handleSubmit = () => {
    const validation = validate();
    if (!!Object.keys(validation).length) {
     setErrors({
       ...errors,
       ...validation,
     });

     return;
    }
    const bookFormData = createFormData();
    if (state.formType === formType.CREATE) {
      saveBook(bookFormData)
        .then(id => {
          showSnackBar(true, `The new book with id #${id} was created!`);
          setState({
            ...state,
            ...initFormState,
          });
        })
        .catch(error => showSnackBar(true, `error occurred while creating! ${error}`))
        .finally(() => setErrors({
          ...initErrorState,
        }));
    } else {
      changeBook(
        bookFormData,
        idParameter,
      )
        .then(id => showSnackBar(true, `The new book with id #${id} was created!`))
        .catch(error => showSnackBar(true, `error occurred while updating! ${error}`))
        .finally(() => setErrors({
          ...initErrorState,
        }));
    }
  };

  useEffect(() => {
    const bookListFilters =  saveBookListParamsToState();
    const formPageType = definePageType(typeParameter);
    fetchAuthors(
      dispatch,
    );
    fetchGenres(
      dispatch,
    );
    if (formPageType === formType.UPDATE || formPageType === formType.INFO) {
      fetchBook(
        dispatch,
        idParameter,
      )
        .then(book => mapReduxBookToReactState(book, bookListFilters, formPageType));
    } else {
      setState({
        ...state,
        bookListFilters,
        formType,
      });
    }
  }, []);

  return (
    <div className={styleClasses.formContainer}>
      <Typography
        align={'center'}
        variant={'header'}
      >
        {
          (state.formType === formType.CREATE && 'Create a book') ||
          (state.formType === formType.INFO && 'Book info') ||
          (state.formType === formType.UPDATE && 'Update a book')
        }
      </Typography>
      <div className={styleClasses.navigationContainer}>
        <div>
          <IconButton
            onClick={backToBookListPage}
          >
            <BackIcon/>
          </IconButton>
        </div>
        <div>
          <IconButton
            hidden={state.formType === formType.CREATE}
            onClick={() => {
              let type;
              if (state.formType === formType.UPDATE) {
                type = formType.INFO;
              } else {
                type = formType.UPDATE;
              }
              setState({
                ...state,
                formType: type,
              });
              searchParams.set('type', type);
              setSearchParams(searchParams);
            }}
          >
            {
              state.formType === formType.UPDATE
                ? <InfoIcon />
                : <PencilIcon/>
            }
          </IconButton>
        </div>
      </div>
      <fieldset
        className={styleClasses.formInnerContainer}
        disabled={state.formType === formType.INFO}
      >
          <TextField
            label={'Title'}
            value={state.title}
            onChange={event => {
              if (errors.titleError) {
                setErrors({
                  ...errors,
                  titleError: '',
                });
              }
              setState({ ...state, title: event.target.value });
            }}
            helperText={errors.titleError}
            isError={!!errors.titleError}
          />
          <TextField
            label={'Publication house'}
            value={state.publicationHouse}
            onChange={event => {
              if (errors.publicationHouseError) {
                setErrors({
                  ...errors,
                  publicationHouseError: '',
                });
              }
              setState({ ...state, publicationHouse: event.target.value });
            }}
            helperText={errors.publicationHouseError}
            isError={!!errors.publicationHouseError}
          />
          <TextField
            label={'Year published'}
            value={state.yearPublished}
            onChange={event => {
              if (errors.yearPublishedError) {
                setErrors({
                  ...errors,
                  yearPublishedError: '',
                });
              }
              setState({ ...state, yearPublished: event.target.value });
            }}
            inputType={'number'}
            helperText={errors.yearPublishedError}
            isError={!!errors.yearPublishedError}
          />
          <TextField
            label={'Circulation'}
            value={state.circulation}
            onChange={event => {
              if (errors.circulationError) {
                setErrors({
                  ...errors,
                  circulationError: '',
                });
              }
              setState({ ...state, circulation: event.target.value });
            }}
            inputType={'number'}
            helperText={errors.circulationError}
            isError={!!errors.circulationError}
          />
          <TextField
            label={'Page amount'}
            value={state.pageAmount}
            onChange={event => {
              if (errors.pageAmountError) {
                setErrors({
                  ...errors,
                  pageAmountError: '',
                });
              }
              setState({
                ...state,
                pageAmount: event.target.value,
              });
            }}
            inputType={'number'}
            helperText={errors.pageAmountError}
            isError={!!errors.pageAmountError}
          />
        <FormControl error={!!errors.authorIdError}>
          <InputLabel
            id='author-select'
          >
            Author
          </InputLabel>
          <Select
            disabled={state.formType === formType.INFO}
            labelId='author-select'
            fullWidth={true}
            value={state.authorId}
          >
            { author.authors.map(authorItem =>
              <MenuItem
                value={authorItem.id}
                onClick={() => {
                  if (errors.authorIdError) {
                    setErrors({
                      ...errors,
                      authorIdError: '',
                    });
                  }
                  setState({
                    ...state,
                    authorId: authorItem.id,
                  });
                }}
              >
                {authorItem.name}
              </MenuItem>
            )}
          </Select>
          <FormHelperText>
            {errors.authorIdError}
          </FormHelperText>
        </FormControl>
        <FormControl
          error={!!errors.genreIdError}
        >
          <InputLabel
            id='genre-select'
          >
            Genre
          </InputLabel>
          <Select
            disabled={state.formType === formType.INFO}
            labelId='genre-select'
            fullWidth={true}
            value={state.genreId}
          >
            {genre.genres.map(genreItem =>
              <MenuItem
                onClick={() => {
                  if (errors.genreIdError) {
                    setErrors({
                      ...errors,
                      genreIdError: '',
                    });
                  }
                  setState({
                    ...state,
                    genreId: genreItem.id,
                  });
                }}
                value={genreItem.id}
              >
                {genreItem.name}
              </MenuItem>
            )}
          </Select>
          <FormHelperText>
            {errors.genreIdError}
          </FormHelperText>
        </FormControl>
        <div>
          <div className={styleClasses.imageContainer}>
              <div
                className={styleClasses.buttonContainer}
              >
                <Button
                  disabled={state.formType === formType.INFO}
                  variant='raised'
                  component='label'
                  fullWidth={true}
                >
                  Upload Image
                  <input
                    hidden
                    accept='image/*'
                    id='raised-button-file'
                    type='file'
                    onChange={event => {
                      const file = event.target.files[0];
                      if (file && file.type.split('/')[0] === 'image') {
                        setState({
                          ...state,
                          image: file,
                        });
                        setErrors({
                          ...errors,
                          imageError: '',
                        });
                      } else {
                        setState({
                          ...state,
                          image: null,
                        });
                        setErrors({
                          ...errors,
                          imageError: 'Incorrect image format. Please, try again.',
                        });
                      }
                    }}
                  />
                </Button>
              </div>
              <div>
                <Typography>
                  {
                    errors.imageError || (state.image
                    ? `Image uploaded: ${state.image.name}`
                    : imageDefaultText)
                  }
                </Typography>
              </div>
          </div>
          <div
            className={styleClasses.buttonContainer + ' ' + styleClasses.cancelImageButtonContainer}
          >
            <Button
              disabled={state.formType === formType.INFO}
              variant='secondary'
              colorVariant='secondary'
              onClick={() => {
                if (state.image) {
                  setState({
                    ...state,
                    image: null,
                  });
                }
              }}
            >
              Cancel Upload
            </Button>
          </div>
        </div>
        <div className={styleClasses.submitButtonsContainer}>
          <Button
            disabled={state.formType === formType.INFO}
            colorVariant={'secondary'}
            onClick={() => {
              if (state.formType === formType.UPDATE) {

              } else {
                backToBookListPage();
              }
            }}
          >
            Cancel
          </Button>
          <Button
            disabled={state.formType === formType.INFO}
            onClick={() => handleSubmit()}
          >
            Save
          </Button>
        </div>
      </fieldset>
      <Snackbar
        open={state.showSnackBar}
        message={state.snackbarText}
        onClose={() => showSnackBar(false, '')}
      >
      </Snackbar>
    </div>
  );
};

export default BookForm;