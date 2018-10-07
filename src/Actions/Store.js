import * as Types from './../Constants/StoreTypes';
import callApi from './../Utils/apiCaller';
export const actFetchStoresRequest = () => {
    return dispatch => {
        return callApi('Store', 'GET', null).then(res => {
            
            
            
             dispatch(actFetchStores(res.data.dung));
        });
    };
}
export const actFetchStores = (stores) => {
    return {
        type : Types.FETCH_STORES,
        stores
    }
}
export const actAddStore = (store)=>{
    return {
        type:Types.ADD_STORE,
        store
    }
}
export const actAddStoreRequest = (store) => {
    return dispatch => {
        return callApi('Store', 'POST',{
            Name:store.Name,
            Addr:store.Addr
        }).then(res => {
            dispatch(actAddStore(res.data.objective));
        });
    };
}
export const actDeleteStore = (id)=>{
    return {
        type:Types.DELETE_STORE,
        id
    }
}
export const actDeleteStoreRequest = (Id) => {
    return dispatch => {
        return callApi(`Store/${Id}`, 'GET', null).then(res => {
            dispatch(actDeleteStore(Id));
        });
    };
}
export const actEditStore = (store)=>{
    return {
        type:Types.EDIT_STORE,
        store
    }
}
export const actEditStoreRequest = (Id) => {
    return dispatch => {
        return callApi(`GetYouWill?Id=${Id}`, 'GET', null).then(res => {
            
            dispatch(actEditStore(res.data.objective));
        });
    };
}
export const actUpdateStore = (store)=>{
    return {
        type:Types.UPDATE_STORE,
        store
    }
}
export const actUpdateStoreRequest = (store) => {
    return dispatch => {
        return callApi('Update', 'POST', null).then(res => {
           
             dispatch(actUpdateStore(res.data.objective));
        });
    };
}
