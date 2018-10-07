import * as CatTypes from './../../Constants/ProductTypes';
var initialState = {};

const productEditing = (state = initialState, action) => {

    switch (action.type) {
        case CatTypes.EDIT_PRODUCT:

            
            return action.product;

        default: return state;
    }
}
export default productEditing;