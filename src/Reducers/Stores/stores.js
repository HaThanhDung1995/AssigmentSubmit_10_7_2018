import * as CatTypes from '../../Constants/StoreTypes';
var initialState = [];
var findIndex = (stores, id) => {
    var result = -1;
    stores.forEach((store, index) => {
        if (store.Id === id) {
            result = index;
        }
    });
    return result;
}
const stores = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case CatTypes.FETCH_STORES:
            state = action.stores;
            
            return [...state];
        case CatTypes.ADD_STORE:
            state.push(action.store);
            return [...state];
        case CatTypes.DELETE_STORE:
            
            index = findIndex(state, action.id);
            state.splice(index, 1);
            return [...state];
        case CatTypes.UPDATE_STORE:
            console.log(action.store);
            index=findIndex(state,action.store.Id);
            state[index]=action.store;
            return [...state];    
        default: return [...state];
    }
}
export default stores;