import {
  RECEIVE_BOOK,
  ERROR_BOOK,
} from '../constants/actionTypes';

const initialState = {
  title: '',
  publicationHouse: '',
  yearPublished: 1700,
  circulation: 0,
  pageAmount: 0,
  genreId: null,
  authorId: null,
  image: null,
  externalError: '',
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_BOOK: {
      return {
        ...state,
        ...action.payload,
      }
    }

    case ERROR_BOOK: {
      return {
        ...state,
        externalError: action.payload,
      }
    }

    default: {
      return state;
    }
  }
}