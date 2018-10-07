import React, { Component } from 'react';
import { actFetchProductsRequest,actDeleteProductRequest } from './../../Actions/Product';
import { connect } from 'react-redux';
import ProductItem from './../Products/ProductItem';
import {
    
    Link

  
  } from "react-router-dom";

class ProductList extends Component {
    componentDidMount() {
        this.props.fetchAllProducts();
    }
    onDelete=(Id)=>{
        this.props.onDeleteProduct(Id);
    }
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((item, index) => {
                
                return (
                    
                    <ProductItem
                        key={index}
                        product={item}
                        index={index}
                        onDelete={this.onDelete}
                    ></ProductItem>
                )
            })
        }
        return result;
    }
    render() {
        var { products } = this.props;
        
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title"><Link to="/product/add">ProductAdd</Link></h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên sản phẩm</th>
                                <th>Loại</th>
                                <th>Cửa hàng</th>
                                <th>Gía</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                                {this.showProducts(products)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct :(id)=>{
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
