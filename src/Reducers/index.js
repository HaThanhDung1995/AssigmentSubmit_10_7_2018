import {combineReducers} from 'redux';
import categories from './Categories/categories';
import categoryEditing from './Categories/categoryEditing';
import stores from './Stores/stores';
import storeEditing from './Stores/storeEditing';
import products from './Products/products';
import productEditing from './Products/productEditing';
const appReducers = combineReducers({
    categories,
    categoryEditing,
    stores,
    storeEditing,
    products,
    productEditing
});
export default appReducers;