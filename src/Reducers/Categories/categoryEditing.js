import * as CatTypes from './../../Constants/CategoryTypes';
var initialState = {};

const categoryEditing = (state = initialState, action) => {

    switch (action.type) {
        case CatTypes.EDIT_CATEGORY:


            return action.category;

        default: return state;
    }
}
export default categoryEditing;