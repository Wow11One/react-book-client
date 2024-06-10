import {
  REQUEST_BOOK_LIST,
  RECEIVE_BOOK_LIST,
  ERROR_BOOK_LIST,
  DELETE_BOOK_SUCCESS,
  SHOW_DELETE_MODAL, SHOW_NOTIFICATION_POP_UP,
} from 'pages/main/constants/actionTypes';

const initialState = {
  books: [],
  isFetchingBooks: false,
  listError: null,
  totalPages: 0,
  currentPage: 1,
  authorId: null,
  genreId: null,
  listLimitSize: 6,
  showDeleteModal: false,
  bookIdToBeDeleted: null,
  showDeleteNotificationPopUp: false,
  notificationPopUpBookId: NaN,
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
        listError: action.payload.message,
      };
    }

    case DELETE_BOOK_SUCCESS: {
     return {
       ...state,
       books: state.books.filter(book => book.id !== action.payload.id),
     };
    }

    case SHOW_DELETE_MODAL: {
      return {
        ...state,
          showDeleteModal: action.payload.showDeleteModal,
          bookIdToBeDeleted: action.payload.bookIdToBeDeleted,
      }
    }

    case SHOW_NOTIFICATION_POP_UP: {
      return {
        ...state,
        showDeleteNotificationPopUp: action.payload.show,
        notificationPopUpBookId: action.payload.id,
      }
    }

    default: {
      return state;
    }
  }
};