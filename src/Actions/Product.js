import * as Types from './../Constants/ProductTypes';
import callApi from './../Utils/apiCaller';
export const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('Product', 'GET', null).then(res => {
            
            dispatch(actFetchProducts(res.data.dung));
        });
    };
}
export const actFetchProducts = (products) => {
    return {
        type : Types.FETCH_PRODUCTS,
        products
    }
}
export const actAddProduct = (product)=>{
    return {
        type:Types.ADD_PRODUCT,
        product
    }
}
export const actAddProductRequest = (product) => {
    return dispatch => {
        return callApi('Product', 'POST',{
            Name:product.Name,
            Price:product.Price,
            CategoryId:product.CategoryId,
            StoreId:product.StoreId
        }).then(res => {
           
            dispatch(actAddProduct(res.data.obj));
        });
    };
}
export const actDeleteProduct = (id)=>{
    return {
        type:Types.DELETE_PRODUCT,
        id
    }
}
export const actDeleteProductRequest = (Id) => {
    return dispatch => {
        return callApi(`Product/${Id}`, 'GET', null).then(res => {
            dispatch(actDeleteProduct(Id));
        });
    };
}
export const actEditProduct = (product)=>{
    return {
        type:Types.EDIT_PRODUCT,
        product
    }
}
export const actEditProductRequest = (Id) => {
    return dispatch => {
        return callApi(`GetProduct?Id=${Id}`, 'GET', null).then(res => {
             
            dispatch(actEditProduct(res.data.objective));
        });
    };
}
export const actUpdateProduct = (product)=>{
    return {
        type:Types.UPDATE_PRODUCT,
        product
    }
}
export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return callApi('UpdateProduct', 'POST', {
            Id:product.Id,
            Name:product.Name,
            CategoryId:product.CategoryId,
            StoreId:product.StoreId,
            Price:product.Price
        }).then(res => {
           
             dispatch(actUpdateProduct(res.data.objective));
        });
    };
}
