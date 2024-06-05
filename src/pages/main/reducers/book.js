import {
  REQUEST_BOOK_LIST,
  RECEIVE_BOOK_LIST,
  ERROR_BOOK_LIST,
} from 'pages/main/constants/actionTypes';

const initialState = {
  books: [],
  isFetchingBooks: false,
  error: null,
  totalPages: 0,
  currentPage: 1,
};

const mapToBook = (book) => ({
  id: book.id,
  title: book.title,
  publicationHouse: book.publicationHouse,
  image: book.image,
  genre: {
    id: book.genre.id,
    name: book.genre.name,
  },
  author: {
    id: book.author.id,
    name: book.author.name,
  },
});

export default function Reducer(state = initialState, action) {
  switch (action.type) {

    case REQUEST_BOOK_LIST: {
      return {
        ...state,
        isFetchingBooks: true,
      };
    }

    case RECEIVE_BOOK_LIST: {
      return {
        ...state,
        totalPages: action.payload.totalPages,
        books: action.payload.list.map(mapToBook),
      };
    }

    case ERROR_BOOK_LIST: {
      return {
        ...state,
        error: action.payload.message,
      };
    }

    default: {
      return state;
    }
  }
};