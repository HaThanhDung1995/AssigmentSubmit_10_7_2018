import React, { Component } from 'react';
import { actFetchCategoriesRequest,actDeleteCategoryRequest } from './../../Actions/index';
import { connect } from 'react-redux';
import CategoryItem from './../Categories/CategoryItem';

class CategoryList extends Component {
    componentDidMount() {
        this.props.fetchAllCategories();
    }
    onDelete=(Id)=>{
        this.props.onDelete(Id);
    }
    showCategories = (categories) => {
        var result = null;
        if (categories.length > 0) {
            result = categories.map((item, index) => {
                return (
                    <CategoryItem
                        key={index}
                        category={item}
                        index={index}
                        onDelete={this.onDelete}
                    ></CategoryItem>
                )
            })
        }
        return result;
    }
    render() {
        var { categories } = this.props;
        
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên Tiếng Anh</th>
                                <th>Tên Tiếng Việt</th>
                                
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                                {this.showCategories(categories)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategories: () => {
            dispatch(actFetchCategoriesRequest());
        },
        onDelete :(id)=>{
            dispatch(actDeleteCategoryRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
