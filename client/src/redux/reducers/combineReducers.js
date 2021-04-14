/*eslint-disable*/
import { combineReducers } from 'redux';
import reducerProduct from './reducerProduct';
import reducerArtist from './reducerArtist';
import reducerCategories from './reducerCategories';
import reducerSeries from './reducerSeries';
import reducerLoading from './reducerLoading';
import reducerPagination from './reducerPagination'
// import reducerTest from './reducerTest';

export default combineReducers({

  reducerProduct: reducerProduct,
  reducerArtist: reducerArtist,
  reducerCategories: reducerCategories,
  reducerSeries: reducerSeries,
  reducerLoading: reducerLoading,
  reducerPagination: reducerPagination,
  // reducerTest: reducerTest,
})

