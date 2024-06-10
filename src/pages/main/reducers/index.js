import { combineReducers } from 'redux';
import book from './book';
import author from './author';
import genre from './genre';

export default combineReducers({
  book,
  author,
  genre,
});