import * as CatTypes from './../../Constants/ProductTypes';
var initialState = [];
var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.Id === id) {
            result = index;
        }
    });
    return result;
}
const products = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case CatTypes.FETCH_PRODUCTS:
            state = action.products;
           
            return [...state];
        case CatTypes.ADD_PRODUCT:
            
            state.push(action.product);
            return [...state];
        case CatTypes.DELETE_PRODUCT:
            
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        case CatTypes.UPDATE_PRODUCT:
            
            index=findIndex(state,action.product.Id);
            state[index]=action.product;
            return [...state];    
        default: return [...state];
    }
}
export default products;