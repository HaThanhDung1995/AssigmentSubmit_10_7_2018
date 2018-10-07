import * as CatTypes from './../../Constants/CategoryTypes';
var initialState = [];
var findIndex = (categories, id) => {
    var result = -1;
    categories.forEach((category, index) => {
        if (category.Id === id) {
            result = index;
        }
    });
    return result;
}
const products = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case CatTypes.FETCH_CATEGORYS:
            state = action.categories;

            return [...state];
        case CatTypes.ADD_CATEGORY:
            state.push(action.category);
            return [...state];
        case CatTypes.DELETE_CATEGORY:
            
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        case CatTypes.UPDATE_CATEGORY:
            console.log(action.category);
            index=findIndex(state,action.category.Id);
            state[index]=action.category;
            return [...state];    
        default: return [...state];
    }
}
export default products;