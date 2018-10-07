import * as Types from './../Constants/CategoryTypes';
import callApi from './../Utils/apiCaller';
export const actFetchCategoriesRequest = () => {
    return dispatch => {
        return callApi('Category', 'GET', null).then(res => {
            
            
            
             dispatch(actFetchCategories(res.data.dung));
        });
    };
}
export const actFetchCategories = (categories) => {
    return {
        type : Types.FETCH_CATEGORYS,
        categories
    }
}
export const actAddCategory = (category)=>{
    return {
        type:Types.ADD_CATEGORY,
        category
    }
}
export const actAddCategoryRequest = (product) => {
    return dispatch => {
        return callApi('Category', 'POST', {
            Name:product.Name,
            NameVn:product.NameVn
        }).then(res => {
            dispatch(actAddCategory(res.data.objective));
        });
    };
}
export const actDeleteCategory = (id)=>{
    return {
        type:Types.DELETE_CATEGORY,
        id
    }
}
export const actDeleteCategoryRequest = (Id) => {
    return dispatch => {
        return callApi(`Category/${Id}`, 'GET', null).then(res => {
            dispatch(actDeleteCategory(Id));
        });
    };
}
export const actEditCategory = (category)=>{
    return {
        type:Types.EDIT_CATEGORY,
        category
    }
}
export const actEditCategoryRequest = (Id) => {
    return dispatch => {
        return callApi(`GetYouWill?Id=${Id}`, 'GET', null).then(res => {
            
            dispatch(actEditCategory(res.data.objective));
        });
    };
}
export const actUpdateCategory = (category)=>{
    return {
        type:Types.UPDATE_CATEGORY,
        category
    }
}
export const actUpdateCategoryRequest = (category) => {
    return dispatch => {
        return callApi('Update', 'POST', {
            Id:category.Id,
            Name:category.Name,
            NameVn:category.NameVn
        }).then(res => {
           
             dispatch(actUpdateCategory(res.data.objective));
        });
    };
}
