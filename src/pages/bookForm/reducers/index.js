import { combineReducers } from 'redux';
import book from './book';
import genre from './genre';
import author from './author';

export default combineReducers({
  book,
  genre,
  author,
});